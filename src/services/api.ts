/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL
      : process.env.REACT_APP_API_URL,
});

const refreshToken = async () => {
  const token = localStorage.getItem("auth");

  try {
    if (token) {
      const tokenParse = JSON.parse(token ? token : "");
      const response = await api.post(
        "/auth/refreshToken/" + tokenParse.access_token,
      );
      localStorage.setItem(
        "auth",
        JSON.stringify({
          signed: true,
          access_token: response.data.access_token,
          user: response.data.user,
        }),
      );
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

api.interceptors.request.use(
  async (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth");

      if (token) {
        const tokenParse = JSON.parse(token ? token : "");
        // @ts-ignore
        config.headers["Authorization"] = "Bearer " + tokenParse?.access_token;
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const { response } = error;
    if (response?.data?.statusCode === 401) {
      await refreshToken();
      return;
    }
    return Promise.reject(error);
  },
);

export default api;
