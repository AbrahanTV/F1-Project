import axios from "axios";

const BASE_URL = "https://api.openf1.org/v1/drivers";

export const getDrivers = async () => {
  const response = await axios.get(`${BASE_URL}?session_key=latest`);
  return response.data;
};
