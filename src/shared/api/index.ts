import {axiosInstance} from "./axiosInstance";
import * as DTO from "./types";
import {AxiosResponse} from "axios";

export {axiosInstance} from "./axiosInstance";
export {DTO};


const getNetworkAndContacts = async (): Promise<DTO.ContactInfo> => {
    const response = await axiosInstance.get("info/networks");
    return response.data;
};




const getCouponsByText = async (text: string): Promise<DTO.SearchResult> => {
    const response = await axiosInstance.get(`coupons/search?search=${text}`);
    return response.data;
};


export const Api = {
    Info: {
        getNetworkAndContacts
    },
    Coupons: {
        getCouponsByText
    }
};