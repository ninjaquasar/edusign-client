import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5100",
});

export default api;
