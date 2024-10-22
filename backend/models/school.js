const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    standard:{
        type:String,
        required:true
    },
    stream:{
        type:String,
        required:true
    }
})
const schoolSchema=mongoose.Schema({
    schoolName:{
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
module.exports=mongoose.model("School",schoolSchema)