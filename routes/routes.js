var express = require("express");
var { uploadImage,downloadImage } = require("../controller/image-controller.js");
var upload = require("../utils/upload.js");


const router = express.Router();

router.get('/',(req,res)=>{  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'John Doe' });
})
router.post('/upload',upload.single('file'), uploadImage);
router.get('/file/:fileId',downloadImage);


module.exports = router;




