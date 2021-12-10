import axios from "axios";

const BASE_URL = "https://weconnect-social-media.herokuapp.com/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
