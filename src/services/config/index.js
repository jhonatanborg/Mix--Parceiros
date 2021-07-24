import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.defaults.baseURL = "https://server.mixentregas.com.br";

const api = axios.create();

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@MIXPARCEIROS:token");
    //console.log(token)
    if (token) {
      config.headers.Authorization = "Bearer " + token;
      //console.log(config.headers.Authorization)
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
