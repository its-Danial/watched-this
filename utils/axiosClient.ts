import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    api_key: process.env.TMDB_API_KEY,
    // language: "en-US",
  },
});

export default axiosClient;
