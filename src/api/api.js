import axios from "axios";

const default_value = () => axios.get(`${process.env.REACT_APP_URI_PANCHO}/`);
const spirits = (uri) => axios.get(`${uri}/espiritus`);

const api = {
    def: default_value,
    spirits
};

export default api;
