//import express from "express";
const express = require('express')
//import router from "./routes/routes.js";
const router = require("./routes/routes.js")
// import cors from 'cors';
const cors = require("cors")
// import DBConnection from "./database/db.js";
const mongoose = require('mongoose')
const app = express();

app.use(cors());
app.use('/',router);

const PORT = 8000;
const dBConnection = async () => {
    const MONODB_URL = `mongodb://kb84101:bipul123@ac-ghfewaj-shard-00-00.twaddrp.mongodb.net:27017,ac-ghfewaj-shard-00-01.twaddrp.mongodb.net:27017,ac-ghfewaj-shard-00-02.twaddrp.mongodb.net:27017/?ssl=true&replicaSet=atlas-14jdeo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URL,{useNewUrlParser: true});
       console.log('Database connected successfully');
    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}
dBConnection();

app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`));