import axios from "axios";

const BASE_URL_API = "http://localhost:3000/api/v1";

const postCreateProduct = async (data) => {
  try {
    const url = `${BASE_URL_API}/product`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getProductItem = async () => {
  try {
    const url = `${BASE_URL_API}/product`;
    const response = await axios.get(url);
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

const DeleteProductItem = async (id) => {
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
  DeleteProductItem,
};
