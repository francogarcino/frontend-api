import axios from "axios";

const default_value = () => axios.get(`${process.env.REACT_APP_URI_PANCHO}/`);
const androids = (uri) => axios.get(`${uri}/androides`);

const api = {
    def: default_value,
    androids
};

export default api;
