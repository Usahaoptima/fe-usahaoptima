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

const postCreateProduct = async (data) => {
  try {
    const url = `${BASE_URL_API}/product`;
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

const getProductItem = async () => {
  try {
    const url = `${BASE_URL_API}/product`;
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

const updateProductItem = async (id, product) => {
  try {
    const url = `${BASE_URL_API}/product/${id}`;
    const response = await axios.put(url, product);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteProductItem = async (id) => {
  try {
    const url = `${BASE_URL_API}/product/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {
  postCreateProduct,
  getProductItem,
  updateProductItem,
  deleteProductItem,
};
