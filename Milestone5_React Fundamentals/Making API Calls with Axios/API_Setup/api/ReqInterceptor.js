import AxiosInstance from "./AxiosInstance";

// Adding Axios request interceptor
AxiosInstance.interceptors.request.use(
  (config) => {
    try {
      const authtoken = localStorage.getItem("authToken");
      if (authtoken) {
        config.headers.Authorization = `Bearer ${authtoken}`;
      }
    } catch (error) {
      console.error("Error in retrieving authtoken:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
