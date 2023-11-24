import axios from "axios";

const BASE_URL_API = "http://localhost:3000/api/v1/users";

const getUsers = async (token) => {
  try {
    const url = `${BASE_URL_API}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(url, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { getUsers };
