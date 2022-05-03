import axiosJWT from "./axiosJWT";

const API_URL = "http://10.104.0.3:5000/api/karyawan";

const getAllKaryawan = async (config) => {
  const response = await axiosJWT.get((config.API_URL = API_URL), config);
  return response.data;
};
const deleteKaryawan = async (config) => {
  const response = await axiosJWT.delete(
    (config.API_URL = `${API_URL}/${config.id}`),
    config
  );
  return response.data;
};

const karyawanService = {
  getAllKaryawan,
  deleteKaryawan,
};
export default karyawanService;
