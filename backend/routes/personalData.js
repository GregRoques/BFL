const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgridApi.js");

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: myKey
    }
}));


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

        transporter.sendMail({
            to: "smfd2023@nolabeds.com,jason@nolabeds.com",
            from: email,
            subject: `${subject}`,
            html: `From: ${name} \n 
            Email: ${email} \n
            Phone: ${phoneEdit} \n
            Date: ${sendDate} \n\n
            ${message}`
    }).then(() => {
        res.json("Yes");
    }).catch(() => {
        throw new Error('Email failed to send')
    });
    } catch(err){
        throw Error(err.message)
    }
});

module.exports = router;
