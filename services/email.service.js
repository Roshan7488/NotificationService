const nodemailer=require('nodemailer');

//A medium that helps your Node.js application send emails
const mailer=(userId,password)=>{
return  transport = nodemailer.createTransport({
   service:"Gmail",
   auth:{
    user:userId,
    pass: password
   }
});
}

module.exports=mailer;