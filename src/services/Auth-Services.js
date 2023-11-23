import axios from "axios";

const BASE_URL_API = "http://localhost:3000/api/v1/auth";

const Register = async (data) => {
  try {
    const url = `${BASE_URL_API}/register`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};

const Login = async (data) => {
  try {
    const url = `${BASE_URL_API}/login`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export { Register, Login };
