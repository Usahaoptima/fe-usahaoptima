import axios from "axios";

const BASE_URL_API = "https://usahaoptima-api.sengked.com/api/v1";

function getAuthTokenFromCookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "access_token") {
      return value;
    }
  }
  return null;
}

const authToken = getAuthTokenFromCookies();

const CreateStaf = async (data) => {
  try {
    const url = `${BASE_URL_API}/staff`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getStaf = async () => {
  try {
    const url = `${BASE_URL_API}/staff`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(url, config);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const updateStaf = async (id, staf) => {
  try {
    const url = `${BASE_URL_API}/staff/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.put(url, staf, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteStaf = async (id) => {
  try {
    const url = `${BASE_URL_API}/staff/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.delete(url, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { CreateStaf, getStaf, updateStaf, deleteStaf };
