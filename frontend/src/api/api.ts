import axios from "axios"
// import { saveAs } from "file-saver";
;

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
    const response = await axios.get("http://localhost:8000/school/download", {params: {schoolName: schoolName}, responseType:"blob"});
    // saveAs(response.data, `${schoolName} Students List.pdf`);
    const file = new Blob([response.data], {type: "application/pdf"})
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', `${schoolName} Student List.pdf`);
    document.body.appendChild(link);
    link.click();

}
export const downloadCollege = async (collegeName:string) => {
    const response = await axios.get("http://localhost:8000/college/download", {params: {collegeName: collegeName}, responseType:"blob"});
    // saveAs(response.data, `${schoolName} Students List.pdf`);
    const file = new Blob([response.data], {type: "application/pdf"})
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', `${collegeName} Student List.pdf`);
    document.body.appendChild(link);
    link.click();

}