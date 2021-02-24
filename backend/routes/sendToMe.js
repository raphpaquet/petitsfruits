const express = require('express');
const sendToMeRouter = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

console.log("from sendToMe")

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENTID, // ClientID
  process.env.GMAIL_CLIENTSECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()


//all of the configuration for making a site send an email.
const transport = {
  // host: "smtp.gmail.com",
  // port: 587,
  // secure: false,
  service:"gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_ACC, 
    clientId: process.env.GMAIL_CLIENTID,
    clientSecret: process.env.GMAIL_CLIENTSECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: accessToken,
    tls: {
      rejectUnauthorized: false
    }
  }
};

const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself')
    }
  });

  sendToMeRouter.post('/', (req,res, next) => {
    //make mailable object
    const mail = {
      from: `${req.body.email}`,
      to: 'paquetraphaelle@gmail.com',
      subject: req.body.subject,
      text: `
      from:
      ${req.body.name} 

      contact: 
      ${req.body.email}

      message: 

      ${req.body.text}`
    }

// error handling goes here. 

    transporter.sendMail(mail, (err,data) => {
      if(err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
          status: 'success'
        })
      }
    })
  });


module.exports = sendToMeRouter;