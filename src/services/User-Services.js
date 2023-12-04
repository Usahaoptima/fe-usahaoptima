import axios from "axios";

const BASE_URL_API = "https://usahaoptima-api.sengked.com/api/v1/users";

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

const updateUser = async (token, data) => {
  try {
    const url = `${BASE_URL_API}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(url, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { getUsers, postUser, deleteUser, updateUser };
