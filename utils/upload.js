// import multer from "multer";
const multer = require("multer")

const upload = multer({dest:'uploads'})


export default upload;