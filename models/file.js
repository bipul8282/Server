var mongoose = require("mongoose");


const FileSchema = new mongoose.Schema({
    path: {
        type:String,
        required: true
    },
    name :{
        type:String,
        required:true
    },
    downloadContent:{
        type:Number,
        required:true,
        default:0
    }
})

const File = mongoose.model('file',FileSchema);

module.exports = File