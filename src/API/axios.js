import axios from "axios";
import { apiUrl } from "../constants/common";

const instance = axios.create({
    baseURL: apiUrl,
});

export default instance;