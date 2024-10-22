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