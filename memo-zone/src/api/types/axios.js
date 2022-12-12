import axios from "axios";
import { BACKEND_URL } from "./index";

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

export { axiosInstance };
