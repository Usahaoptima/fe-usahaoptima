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

const postUser = async (data, token) => {
  try {
    const url = `${BASE_URL_API}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      "Content-Type": "application/json",
    };
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteUser = async (id) => {
  try {
    const url = `${BASE_URL_API}/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { getUsers, postUser, deleteUser };
