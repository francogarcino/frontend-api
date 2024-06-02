import axios from "axios";

const sv = "https://express-api-franco-garcinos-projects.vercel.app";

const def = () => axios.get(`${sv}/`);
const androids = () => axios.get(`${sv}/all`);

const api = {
    def,
    androids
};

export default api;
