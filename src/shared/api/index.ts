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



// {
//     "phone": "+996777363363",
//     "password": "123",
//     "first_name": "zb",
//     "last_name": "zb",
//     "password2": "123"
// }
//
// {
//     "phone": "+996777363363",
//     "password": "123",
//     "first_name": "zb",
//     "last_name": "zb",
//     "password2": "123",
//     "confirmation_code": "695854"
// }
//
//
// {
//     "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyMjY1NTI4MDQwLCJqdGkiOiJlMTRlZGIyMTE4YTc0MzE5YjlhNDJjNmM1MWQwNjZjNyIsInVzZXJfaWQiOjMxfQ.4uO3LI_b-KPmGPGObYnEauZIq6QgBE87kGskin2_ceM",
//     "phone": "+996777363363",
//     "first_name": "zb",
//     "last_name": "zb"
// }