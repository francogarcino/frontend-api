import axios from "axios";

const spots = (uri) => axios.get(`${uri}/ubicacion`);

const api = {
    spots
};

export default api;
