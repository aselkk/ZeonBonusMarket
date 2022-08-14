import axios, {AxiosRequestConfig, AxiosInstance} from "axios";
import dayjs from "dayjs";


// TODO: vite.config ENV
const WEB_API_URL = "185.178.44.117";


const axiosInstance: AxiosInstance = axios.create({
    baseURL: `http://${WEB_API_URL}/api/v1`,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5_000 // TODO: вернуть 20_000
});

axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const date = dayjs(new Date()).format("DD.MM.YYYY hh:mm:ss");
    console.log(`${date}: [${request.method?.toUpperCase()}] ${request.baseURL}/${request.url}`);
    return request;
});


export {axiosInstance};
export * as DTO from "./types";