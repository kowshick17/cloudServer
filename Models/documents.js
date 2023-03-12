const mongoose=require('mongoose')

const DocumentSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    fileName:{
        type:String,
        required:true
    },
    filetype:{
        type:String,
        required:true
    },
    Document:{
        data:Buffer,
        contentType:String
    }
})

const DocumentModel=mongoose.model('document',DocumentSchema)
module.exports=DocumentModel;