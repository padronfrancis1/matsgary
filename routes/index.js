var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
//var xoauth2 = require('xoauth2');
var mailer = require('express-mailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/Schedule', function(req, res, next) {
  res.render('Schedule', { title: 'Schedule' });
});

router.get('/AboutUs', function(req, res, next) {
  res.render('AboutUs', { title: 'AboutUs' });
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});

router.post('/ContactEmail', function(req, res) {



  // var smtpTransport = nodemailer.createTransport("SMTP", {
  //   service: "Gmail",
  //   auth: {
  //     XOAuth2: {
  //       user: "padronfrancis1@gmail.com",
  //       clientId: "787830873766-35kvtrpvug64hlnqvns0ag9qk4pn15vs.apps.googleusercontent.com",
  //       clientSecret: "98LpIAQVL0x1GsK_QkkykcnK",
  //       refreshToken: "1/WXnyVYnb-7Oj69wlKU-HwzKMmIIk6UzCNlAg6WrdYMIOV5Nz5Qdd6wuPojD8LoLB"
  //     }
  //   }
  // });

  // var mailOptions = {
  //   from: "padronfrancis1@gmail.com",
  //   to: "francisjohnpadron@yahoo.com",
  //   subject: "Hello",
  //   generateTextFromHTML: true,
  //   html: "<b>Hello world</b>"
  // };

  // smtpTransport.sendMail(mailOptions, function(error, response) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(response);
  //   }
  //   smtpTransport.close();
  // });











  
  // console.log("Contact Reached");
  // //var mailOpts, smtpTrans;

  // var nodemailer = require('nodemailer');
  // var transporter = nodemailer.createTransport({
  //     service: 'Gmail',
  //     auth: {

  //     }
      
  // });



  var transporter = nodemailer.createTransport({
    service: 'Gmail',
      auth: {
        user: 'matsgary20xx@gmail.com',
        pass: 'M@t$g@ry2017'
    }
  });

  var mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt',
    to: 'mathiastony12@yahoo.com',
    // to: 'francisjohnpadron@yahoo.com',
    subject: 'Message from the Client - ' + req.body.name,
    
    text: 'name : ' + '   ' + req.body.name + '   '  +  'email address : ' + req.body.email + '   '  +  'Message: ' + req.body.message
  };

  console.log('created');
  
  transporter.sendMail(mailOpts, function(error, infor){
    // from: 'padronfrancis1@gmail.com',
    //   to: 'francisjohnpadron@yahoo.com',
    //   subject: 'hello world!',
    //   text: 'hello world!'

    if(error) {

     res.render('MessageFailed', { title: 'Message Failed' });
     console.log("Error");
    }
    else {

      res.render('MessageSent', { title: 'Message Sent!' });
      console.log("Success");
    }

  });


  // smtpTrans = nodemailer.createTransport("SMTP", {
  //   service: "Gmail",
  //   auth: {
  //     XOAuth2: {
  //       user: "padronfrancis1@gmail.com", // Your gmail address.
  //       // Not @developer.gserviceaccount.com
  //       clientId: "1031556748357-82fcmdjqjfm4v2gbtfulajo05rlasvt3.apps.googleusercontent.com",
  //       clientSecret: "8ALjIsFWCJ1xjh-iHr0xUCkf",
  //       refreshToken: "1/mcE_MwkETrMaRs2n0Zp5flyUP4DE3YgioriSD63120U"
  //     }
  //   }
  // });

  
  

  // smtpTrans.sendMail(mailOpts, function(error, info){
    
  //   if(error) {

   //   // res.render('MessageFailed', { title: 'Message Failed' });
  //    console.log("Error");
  //   }
  //   else {

  //     // res.render('MessageSent', { title: 'Message Sent!' });
  //     console.log("Success");
  //   }

  // });

});

router.get('/messageSent', function(req, res, next) {
  res.render('MessageSent', { title: 'Home and Auto Insurance' });
});

router.get('/messageFailed', function(req, res, next) {
  res.render('MessageFailed', { title: 'Home and Auto Insurance' });
});


module.exports = router;
