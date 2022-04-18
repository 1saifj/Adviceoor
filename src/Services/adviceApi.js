import axios from "axios";
export const MainRoot = "https://api.adviceslip.com";

export const Api = axios.create({
    baseURL: `${MainRoot}`,
});

export default Api;
