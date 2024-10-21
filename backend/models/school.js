const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Standard:{
        type:String,
        required:true
    },
    Stream:{
        type:String,
        required:true
    }
})
const schoolSchema=mongoose.model({
    SchoolName:{
        type:String,
        required:true
    },
    FacultyName:{
        type:String,
        required:true
    },
    Students:[studentSchema]
})
module.exports=mongoose.model("School",schoolSchema)