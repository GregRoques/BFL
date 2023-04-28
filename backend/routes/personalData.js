const express = require("express");
const router = express.Router();

const sgMail = require('@sendgrid/mail') //npm install --save @sendgrid/mail
const myKey = require("../util/sendgridApi.js");
sgMail.setApiKey(myKey)


const sessionIdExpiration = 3600000;

const phoneFormat = ph => {
    const onlyNumbers = ph.replace(/\D/g, "");
    if (onlyNumbers.length == 10) {
        const newNumber = onlyNumbers.substring(0, 3) + "-" + onlyNumbers.substring(3, 6) + "-" + onlyNumbers.substring(6, 10);
        return newNumber;
    } else {
        return "None Provided";
    }
};

const currCredentials = {};

function clearCurrCredentials(sId){
  if( !(sId in currCredentials)) return;
  clearTimeout(currCredentials[sId].clear)
  delete currCredentials[sId]
}

router.post("/requestEmailCredentials", (req, res) => {
  try {
    const ip = req.ip || req.socket.remoteAddress;
    const sessionId = req.cookies && req.cookies.NolaBedSessionID ? req.cookies.NolaBedSessionID : ""
    const csrf = crypto.randomUUID();
    let newSessionId;
    if(sessionId && sessionId in currCredentials && currCredentials[sessionId].ip === ip ){
      newSessionId = sessionId;
    } else {
      newSessionId = crypto.randomUUID();
    }
    res.cookie('NolaBedSessionID', newSessionId, {
      secure: true, 
      httpOnly: true,
      sameSite: "none", 
      overwrite: true,
      expires: new Date(Date.now() + sessionIdExpiration)
    }).json({csrf}).then(()=>{
      currCredentials[newSessionId] = {csrf, ip, clear: setTimeout(()=>{clearCurrCredentials(newSessionId)}, sessionIdExpiration)}
    }).catch(()=>{
      throw new Error('Failed to send user token to server')
    })
  } catch(err){
    const errMsg = err.message || "Could not generate user tokens"
    throw Error(errMsg)
  }
})

router.post("clearSessionId", (req,res)=>{
  const {sessionId} = req.body;
  if(sessionId && sessionId in currCredentials){
    clearCurrCredentials(sessionId)
  }
})


router.post("/sendEmail", (req, res) => {
  try{
    const { name, email, phone, message, subject, csrf } = req.body;
    const sessionId = req.cookies && req.cookies.NolaBedSessionID ? req.cookies.NolaBedSessionID : "";
    const ip = req.ip || req.socket.remoteAddress
    
    if(!sessionId || !(sessionId in currCredentials) || currCredentials[sessionId].ip !== ip || currCredentials[sessionId].csrf !== csrf){
      throw new Error('Your session has expired.\n Refresh page and complete again\n or email: Jason@NolaBeds.com.')
    }

    const phoneEdit = phoneFormat(phone);
    const sendDate = new Date().toISOString().slice(0, 10);

    const emailMsg ={
      to: "smfd2023@nolabeds.com,jason@nolabeds.com",
      from: "smfd2023@nolabeds.com",
      subject: `${subject}`,
      html: `From: ${name} \n 
      Email: ${email} \n
      Phone: ${phoneEdit} \n
      Date: ${sendDate} \n\n
      ${message}`
    }
    sgMail.send(emailMsg).then(() => {
        res.json("Yes");
    }).catch(() => {
        throw new Error(`Email failed to send: ${err}`)
    });
  } catch(err){
    throw Error(`Network Error: ${err}`)
  }
});

module.exports = router;