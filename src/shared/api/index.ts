import {axiosInstance} from "./axiosInstance";
import * as DTO from "./types";


// TODO: сделать так https://github.com/feature-sliced/examples/tree/master/todo-app/src/shared/api

export {axiosInstance} from "./axiosInstance";
export {DTO};


const signIn = async (phone: string, password: string): Promise<DTO.UserInfo> => {
    const response = await axiosInstance.post("users/login/", {
        phone: phone,
        password: password
    });

    return response.data;
};


const checkAccessToken = async (token: string): Promise<boolean> => {
    const response = await axiosInstance.get("/users/favourite-coupons/", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.status === 200;
};


const signUp = async (data: DTO.PhoneAuthData) => {
    const response = await axiosInstance.post("/users/auth/", data);
};

const confirmSignUp = async (data: DTO.PhoneAuthConfirmData) => {
    const response = await axiosInstance.post("/users/login-confirm/", data);
};

const getNetworkAndContacts = async (): Promise<DTO.ContactInfo> => {
    const response = await axiosInstance.get("info/networks");
    return response.data;
};

const getDescriptionAboutUs = async (): Promise<string> => {
    const response = await axiosInstance.get("info/about-us");
    return response.data.description;

};
const getMapCordinate = async () => {
    const response = await axiosInstance.get("/info/our-map-coordinates/");
    return response;

};

const getFaq = async (): Promise<DTO.FaqItem[]> => {
    const response = await axiosInstance.get("info/faq/");
    return response.data;
};



const getTrendCoupons = async (page: number): Promise<DTO.SearchResult> => {
    const response = await axiosInstance.get(`coupons/trends?page=${page}`);
    return response.data;
};


const getCouponsByText = async (text: string): Promise<DTO.SearchResult> => {
    const response = await axiosInstance.get(`coupons/search?search=${text}`);
    return response.data;
};


export const Api = {
    User: {
        signIn,
        checkAccessToken,
        signUp,
        confirmSignUp
    },
    Info: {
        getNetworkAndContacts,
        getDescriptionAboutUs,
        getFaq,
        getMapCordinate
    },
    Coupons: {
        getTrendCoupons,
        getCouponsByText
    }
};


// 777363363
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