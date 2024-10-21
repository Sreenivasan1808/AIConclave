const mongoose=require("mongoose")
const studentSchema=mongoose.model({
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
    }
})
const collegeSchema=mongoose.model({
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