import axios from "axios";
const API_URL = "http://10.104.0.3:5000/api/users/";

const axiosConfig = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const getToken = async () => {
  const response = await axiosConfig.get("token");
  return response.data;
};

const tokenService = {
  getToken,
};
export default tokenService;
