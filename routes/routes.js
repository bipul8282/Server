// import express from "express";
const express = require("express")
// import { uploadImage,downloadImage } from "../controller/image-controller.js";
const {uploadImage ,downloadImage} = require("../controller/image-controller.js")
// import upload from "../utils/upload.js";
const upload = require("../utils/upload.js")


const router = express.Router();


router.post('/upload',upload.single('file'), uploadImage);
router.get('/file/:fileId',downloadImage);

export default router;




