import Axios from "axios";
import { getApiBaseUrl } from "./utils";

const jobApi = {
  async submitJob(data, token) {
    const BASE_URL = getApiBaseUrl();
    const response = await Axios.post(`${BASE_URL}/job-posts/`, data, {
      headers: { TOKEN: token },
    });
    return response.data;
  },

  async getJobs(token) {

  }
};

export default jobApi;
