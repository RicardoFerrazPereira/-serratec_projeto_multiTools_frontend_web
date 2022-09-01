import axios from "axios";

const api = axios.create({
  baseURL: "http://169.57.150.59:8017/",
});

export default api;

export const createSession = async (email, senha) => {
  return api.post("/usuario/login", { email, senha }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log("status:", error.response.status);
      console.log(error.response.headers);
    }
  });
};
