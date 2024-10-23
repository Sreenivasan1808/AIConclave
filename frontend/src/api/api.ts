import axios from "axios";
import { saveAs } from "file-saver";

const SERVER_URL = "http://localhost:8000";

export const registerCollege = async (data: any) => {
  const response = await axios.post(
    `${SERVER_URL}/college/registerCollege`,
    data
  );
  if (response.status == 200) {
    return "Success";
  } else {
    return response.data;
  }
};

export const registerSchool = async (data: any) => {
  const response = await axios.post(
    `${SERVER_URL}/school/registerSchool`,
    data
  );
  if (response.status == 200) {
    return "Success";
  } else {
    return response.data;
  }
};

export const getSchoolCount = async () => {
  const response = await axios.get(`${SERVER_URL}/school/getSchoolCount`);
  if (response.status == 200) {
    return response.data;
  } else {
    return null;
  }
};

export const getCollegeCount = async () => {
  const response = await axios.get(`${SERVER_URL}/college/getCollegeCount`);
  if (response.status == 200) {
    console.log(response.data);
    return response.data;
  } else {
    return null;
  }
};

export const downloadSchool = async (schoolName: string) => {
  const response = await axios.get(`${SERVER_URL}/school/downloadPDF`, {
    params: { schoolName: schoolName },
    responseType: "blob",
  });
  // saveAs(response.data, `${schoolName} Students List.pdf`);
  const file = new Blob([response.data], { type: "application/pdf" });
  const fileURL = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = fileURL;
  link.setAttribute("download", `${schoolName} Student List.pdf`);
  document.body.appendChild(link);
  link.click();
};
export const downloadCollege = async (collegeName: string) => {
  const response = await axios.get(`${SERVER_URL}/college/downloadPDF`, {
    params: { collegeName: collegeName },
    responseType: "blob",
  });
  // saveAs(response.data, `${schoolName} Students List.pdf`);
  const file = new Blob([response.data], { type: "application/pdf" });
  const fileURL = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = fileURL;
  link.setAttribute("download", `${collegeName} Student List.pdf`);
  document.body.appendChild(link);
  link.click();
};

export const verifyAdminLogin = async (data: any) => {
  const response = await axios.post(`${SERVER_URL}/admin/login`, data);
  if (response.status == 200) {
    return true;
  } else {
    console.log(response.data);
    return false;
  }
};

export const downloadCollegeExcel = async (collegeName: String) => {
  const response = await axios.get(`${SERVER_URL}/college/downloadExcel`, {
    params: { collegeName: collegeName },
    responseType: "blob"
  });
  const blob = new Blob([response.data], {
    type: response.headers["content-type"],
  }); 
  saveAs(blob, `${collegeName} Students List.xlsx`);

};

export const downloadSchoolExcel = async (schoolName: string) => {
  const response = await axios.get(`${SERVER_URL}/school/downloadSchool`, {
    params: { schoolName: schoolName },
    responseType: "blob"
  });
  const blob = new Blob([response.data], {
    type: response.headers["content-type"],
  });
  saveAs(blob, `${schoolName} Students List.xlsx`);
};
