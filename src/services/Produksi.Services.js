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

const CreateProduksi = async (data) => {
  try {
    const url = `${BASE_URL_API}/item`;
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

const getProduksi = async () => {
  try {
    const url = `${BASE_URL_API}/item`;
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

const updateProduksi = async (id, staf) => {
  try {
    const url = `${BASE_URL_API}/item/${id}`;
    const response = await axios.put(url, staf);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteProduksi = async (id) => {
  try {
    const url = `${BASE_URL_API}/item/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { CreateProduksi, getProduksi, updateProduksi, deleteProduksi };
