const nodemailer=require('nodemailer');

//A medium that helps your Node.js application send emails
const sendmail=(userId,password)=>{
const transport = nodemailer.createTransport({
   service:"Gmail",
   auth:{
    user:userId,
    pass: password
   }
});
transport.sendMail(
  {
    from:'mba@support.com',
    to:'dharmendreakumar74888121@gmail.com',
    subject:'Test email for nodemailer',
    text:'Hey,this is a test email'
  }
)
}

module.exports=sendmail;