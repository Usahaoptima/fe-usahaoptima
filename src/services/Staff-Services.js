import axios from "axios";

const BASE_URL_API = "https://usahaoptima-api.sengked.com/api/v1";

const CreateStaf = async (data) => {
  try {
    const url = `${BASE_URL_API}/staff`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getStaf = async () => {
  try {
    const url = `${BASE_URL_API}/staff`;
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const updateStaf = async (id, staf) => {
  try {
    const url = `${BASE_URL_API}/staff/${id}`;
    const response = await axios.put(url, staf);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteStaf = async (id) => {
  try {
    const url = `${BASE_URL_API}/staff/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { CreateStaf, getStaf, updateStaf, deleteStaf };
