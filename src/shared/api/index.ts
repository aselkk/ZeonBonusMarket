import {axiosInstance} from "./axiosInstance";
import * as DTO from "./types";


export {axiosInstance} from "./axiosInstance";
export {DTO};


const getNetworkAndContacts = async (): Promise<DTO.ContactInfo> => {
    const response = await axiosInstance.get("info/networks");
    return response.data;
};

const getDescriptionAboutUs = async (): Promise<string> => {
    const response = await axiosInstance.get("info/about-us")
    return response.data.description;

}

const getFaq = async (): Promise<DTO.FaqItem[]> => {
    const response = await axiosInstance.get("info/faq/");
    return response.data;
};


const getCouponsByText = async (text: string): Promise<DTO.SearchResult> => {
    const response = await axiosInstance.get(`coupons/search?search=${text}`);
    return response.data;
};


export const Api = {
    Info: {
        getNetworkAndContacts,
        getDescriptionAboutUs,
        getFaq
    },
    Coupons: {
        getCouponsByText
    }
};