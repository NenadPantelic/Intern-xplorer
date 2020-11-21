export const getApiBaseUrl = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  if (!API_BASE_URL) throw new Error("API_BASE_URL should be set");

  return API_BASE_URL;
};
