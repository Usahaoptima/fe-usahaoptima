import axios from "axios";

const BASE_URL_API = "http://localhost:3000/api/v1/report";

const getTotal = async (criteria) => {
  try {
    const url = `${BASE_URL_API}/total/${criteria}`;
    const response = await axios.get(url);
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getData = async () => {
  try {
    const response = await axios.get(BASE_URL_API);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getTotal, getData };
