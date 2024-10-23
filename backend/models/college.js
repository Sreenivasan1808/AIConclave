const mongoose=require("mongoose")
const studentSchema=mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    yearOfStudy:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    batch:{
        type:Number,
        required:true
    }
})
const collegeSchema=mongoose.Schema({
    collegeName:{
        type:String,
        required:true
    },
    facultyName:{
        type:String,
        required:true
    },
    studentCount:{
        type:Number,
        required:true
    },
    studentList:[studentSchema]
})
module.exports=mongoose.model("College",collegeSchema)