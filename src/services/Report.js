import axios from "axios";

const BASE_URL_API = "http://localhost:3000/api/v1/report";

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

const getTotal = async (criteria) => {
  try {
    const url = `${BASE_URL_API}/total/${criteria}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(url, config);
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getTotalMonth = async (criteria, month) => {
  try {
    const url = `${BASE_URL_API}/total/${criteria}/${month}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(url, config);
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getDataMonth = async (month) => {
  try {
    const url = `${BASE_URL_API}/total-month/${month}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(url, config);
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getData = async () => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(BASE_URL_API, config);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getTotal, getData, getTotalMonth, getDataMonth };
