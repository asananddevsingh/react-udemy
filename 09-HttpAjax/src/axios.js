import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN_FROM_INSTANCE";

// You can do all other things too here.
// axios.interceptors.request...

export default instance;
