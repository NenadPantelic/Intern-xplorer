import Axios from "axios";
import { getApiBaseUrl } from "./utils";

const authApi = {
  async login(data) {
    const BASE_URL = getApiBaseUrl();
    const response = await Axios.post(`${BASE_URL}/login`, data);
    return response.data;
  },
};

export default authApi;
