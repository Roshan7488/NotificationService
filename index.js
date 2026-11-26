const express = require('express');
const bodyParser=require('body-parser');
const env = require('dotenv');
const mongoose= require('mongoose');
const sendmail=require('./services/email.service');

const app=express();

env.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.PORT, async ()=>{
  console.log('Notificatication server started');
  sendmail(process.env.EMAIL,process.env.EMAIL_PASS);
  try{
    await mongoose.connect(process.env.DB_URL);
    console.log("successfully connected to mongoose");
  }catch(error){
    console.log(error);
  }
});