import axios from "axios";

const sv = "https://express-api-franco-garcinos-projects.vercel.app"

const def = () => axios.get(`${sv}/`)
const androids = () => axios.get(`${sv}/all`);

export default {
    def, androids
}