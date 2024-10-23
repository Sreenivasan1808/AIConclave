import { useState } from "react";
import Navbar from "../Navbar";
import { verifyAdminLogin } from "../../api/api";
import { useNavigate } from "react-router-dom";

interface Login {
  username: String;
  password: String;
}

const Login = () => {
  const [formData, setFormData] = useState<Login>({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);

    try {
      await verifyAdminLogin(formData);
      navigate("/admin");
    } catch (error) {
      setResponse("Invalid credentials");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen my-8 py-8">
      <div className="w-[60%] m-2 fixed top-0 z-10">
        <Navbar></Navbar>
      </div>
      <form
        className="border border-yellow-200 rounded-md shadow-sm m-5 p-5 flex flex-col gap-2 w-[20%]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <div>
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2 uppercase"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
            autoFocus={true}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2 uppercase"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center m-4">
          <button
            type="submit"
            className="w-fit p-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </div>
        <p className="text-red-500 text-center">{response}</p>
      </form>
    </div>
  );
};

export default Login;
