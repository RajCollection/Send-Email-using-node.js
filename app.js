var fs = require('fs');
var path = require('path');
var smtpTransport = require('nodemailer-smtp-transport');
var config = JSON.parse(fs.readFileSync("config.json"));  //its optional to keep password safe
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
   service: 'gmail',
   secure: false,
   port: 25,
   auth:{
       user: 'rajpeer141@gmail.com', //your mail id
       pass: 'xxxxxxxxxxx'  //password of your account
      //pass: config.password
   },
   tls: {
       rejectUnauthorized: false
   }

});

let HelperOptions = {
   from: '"raj peer" <rajpeer141@gmail.com>', //your mail id
   to: 'rajmtech7@gmail.com',  // to whom you are sending
   subject: 'form nodejs',   
   text: "hiiiii"

};
transporter.sendMail(HelperOptions, (error, info)=>{
   if (error) {
       return console.log(error);
   }
   console.log("email sent");
   console.log(info);
});

         

