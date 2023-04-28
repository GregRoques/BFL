const express = require("express");
const router = express.Router();

const sgMail = require('@sendgrid/mail')
const myKey = require("../util/sendgridApi.js");
sgMail.setApiKey(myKey)

const phoneFormat = ph => {
    const onlyNumbers = ph.replace(/\D/g, "");
    if (onlyNumbers.length == 10) {
        const newNumber = onlyNumbers.substring(0, 3) + "-" + onlyNumbers.substring(3, 6) + "-" + onlyNumbers.substring(6, 10);
        return newNumber;
    } else {
        return "None Provided";
    }
};


router.post("/", (req, res) => {
    try{
        const { name, email, phone, message, subject } = req.body;
        
        const phoneEdit = phoneFormat(phone);
        const sendDate = new Date().toISOString().slice(0, 10);

       const emailMsg ={
            to: "smfd2023@nolabeds.com,jason@nolabeds.com",
            from: email,
            subject: `${subject}`,
            html: `From: ${name} <br> 
            Email: ${email} <br>
            Phone: ${phoneEdit} <br>
            Date: ${sendDate} <br><br>
            ${message}`
        }
        sgMail.send(emailMsg).then(() => {
            res.json("Yes");
        }).catch((err) => {
            const error1 = "Error sending failure: " + err
            //console.log(error1)
            throw new Error(error1)
        });
    } catch(err){
        const error2 = "Backend Error before sgMail.send: " + err
        //console.log(error2)
        throw Error(error2)
    }
});

module.exports = router;