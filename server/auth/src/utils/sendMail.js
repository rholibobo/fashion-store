const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();



async function sendMail(options){
    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            secure: true,
            auth: {
                user:process.env.NODEMAILER_MAIL,
                pass:process.env.NODEMAILER_PASSWORD
            }
    })

    const {email, subject, template, data} = options;

    //GET PATH TO EMAIL
   const templatePath = path.join(__dirname, '../mails', template);

   //RENDER EMAIL TEMPLATE WITH EJS
   const html = await ejs.renderFile(templatePath, data);

   const mailOptions = {
    from: process.env.S_MAIL,
    to: email,
    subject,
    html,
   };

    await transporter.sendMail(mailOptions)
    console.log("message sent successfully")
    }
    catch(err){
        console.log(err.message, "message not sent")
    }
    
}

module.exports = {sendMail}