import axios from 'axios';

const BASE_URL_API = 'http://localhost:3000/api/v1';

function getAuthTokenFromCookies() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'access_token') {
      return value;
    }
  }
  return null;
}

const authToken = getAuthTokenFromCookies();

const postCreateSales = async (data) => {
  try {
    const url = `${BASE_URL_API}/sales`;
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

const getPDFReport = async (id) => {
  try {
    const url = `${BASE_URL_API}/sales/report/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(url, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getPaymentToken = async (data) => {
  try {
    const url = `${BASE_URL_API}/sales/payment`;
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

const getSalesItem = async () => {
  try {
    const url = `${BASE_URL_API}/sales`;
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

export {
  postCreateSales,
  getSalesItem,
  updateSalesItem,
  deleteSalesItem,
  getPaymentToken,
  getPDFReport,
};
