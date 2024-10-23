import axios from "axios"
// import.meta.env.SERVER_URL as SERVER_URL;

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
        console.log(response.data);
        return response.data;
    }else{
        return null;
    }
}

export const downloadSchool = async (schoolName:string) => {
    const response = await axios.get("http://localhost:8000/school/download", {params: {schoolName: schoolName}});
    if(response.status == 200){
        console.log("SUccess");
        
    }else{
        console.log("Error");
    }

}