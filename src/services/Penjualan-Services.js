import axios from "axios";

const BASE_URL_API = "http://localhost:3000/api/v1";

const postCreateSales = async (data) => {
  try {
    const url = `${BASE_URL_API}/sales`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getSalesItem = async () => {
  try {
    const url = `${BASE_URL_API}/sales`;
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const updateSalesItem = async (id, sales) => {
  try {
    const url = `${BASE_URL_API}/sales/${id}`;
    const response = await axios.put(url, sales);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteSalesItem = async (id) => {
  try {
    const url = `${BASE_URL_API}/sales/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { postCreateSales, getSalesItem, updateSalesItem, deleteSalesItem };
