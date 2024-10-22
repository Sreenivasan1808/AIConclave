import axios from "axios"

export const registerCollege = async (data:any) => {
    const response = await axios.post("http://localhost:8000/college/registerCollege", data);
    if(response.status == 200){
        return "Success";
    }else{
        return response.data;
    }
} 

export const registerSchool = async (data:any) => {
    const response = await axios.post("http://localhost:8000/school/registerSchool", data);
    if(response.status == 200){
        return "Success";
    }else{
        return response.data;
    }
} 

export const getSchoolCount = async () => {
    const response = await axios.get("http://localhost:8000/school/getSchoolCount");
    if(response.status == 200){
        return response.data;
    }else{
        return null;
    }
}

export const getCollegeCount = async () => {
    const response = await axios.get("http://localhost:8000/college/getCollegeCount");
    if(response.status == 200){
        return response.data;
    }else{
        return null;
    }
}