const mongoose=require("mongoose")
const studentSchema=mongoose.model({
    Name:{
        type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    }
})
const collegeSchema=mongoose.model({
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
module.exports=mongoose.model("College",collegeSchema)