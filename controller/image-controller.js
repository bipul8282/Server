// // import File from "../models/file.js";
// const File = require("../models/file.js")




// const uploadImage = async (request,response) => {
//   const fileObj = {
//     path : request.file.path,
//     name : request.file.originalname
//   }
//   try{
//  const file =await File.create(fileObj);
//  response.status(200).json({path : `http://localhost:8000/file/${file._id}`});
//   }catch(error){
//     console.error(error.message);
//     response.status(500).json({ error:error.message})
//   }
    
// }
//  const downloadImage = async (request,response) => {
//     try{
//     const file = await File.findById(request.params.fileId);
//     file.downloadContent++;

//     await file.save();

//     response.download(file.path,file.name);
//     }catch(error){
// console.error(error.message);
// return response.status(500).json({error:error.message});
//     }
// }

// module.exports = {downloadImage, uploadImage}
// import File from "../models/file.js";
const File = require("../models/file.js")

const uploadImage = async (request, response) => {
  const { path, originalname: name } = request.file;
  try {
    const file = await File.create({ path, name });
    response.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    response.status(500).send(error.message);
  }
};

const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);
    file.downloadContent++;
    await file.save();
    response.sendFile(file.path);
  } catch (error) {
    console.error(error.message);
    response.status(500).send(error.message);
  }
};

module.exports = { downloadImage, uploadImage };
