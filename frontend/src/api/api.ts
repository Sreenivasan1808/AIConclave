import axios from "axios"

export const registerCollege = async (data:any) => {
    const response = await axios.post("", data);
    if(response.status == 200){
        return "Success";
    }else{
        return response.data;
    }
} 

export const registerSchool = () => {
    
} 