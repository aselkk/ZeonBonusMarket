import {axiosInstance} from "./axiosInstance";
import * as DTO from "./types";
import _ from "lodash";

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

// recovery
const recoveryPhoneForSms = async (data: DTO.RecoveryData) => {
    try {
        const response = await axiosInstance.post("/users/recovery-password-send-sms/", data);
        return "success";
    } catch (err) {
        // TODO: потому что так работает бэкенд
        const error = err as any;
        const data = error?.response?.data;
        if (error.response?.status === 400 &&
            data.message === "Не удалось отправить сообщение. Попробуйте позже.") {
            return "success";
        }
        const msg = data.detail || data.message;
        throw new Error(msg);
    }
};

const recoveryWithConfirmCode = async (data: DTO.RecoveryData) => {
    return  await axiosInstance.post("/users/recovery-password-confirm/", data);
};

const recoveryChangePassword = async (data: DTO.RecoveryData) => {
    const response = await axiosInstance.patch("/users/recovery-password/", data);
};
// recovery-end

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


const getCoupons = async (page?: number, tagId?: number): Promise<DTO.SearchResult> => {
    const params = new URLSearchParams();
    page && params.append("page", String(page));
    tagId && params.append("tags", String(tagId));

    const response = await axiosInstance.get(`coupons/?${params}`);
    return response.data;
};

const getTrendCoupons = async (tagId?: number, page?: number): Promise<DTO.SearchResult> => {
    const params = new URLSearchParams();
    tagId && params.append("tags", String(tagId));
    page && params.append("page", String(page));

    const response = await axiosInstance.get(`coupons/trends?${params}`);
    return response.data;
};

const getCouponsByCategory = async (categoryId: number, tagId?: number, page?: number): Promise<DTO.SearchResult> => {
    const params = new URLSearchParams();
    page && params.append("page", String(page));
    tagId && params.append("tags", String(tagId));

    const response = await axiosInstance.get(`/coupons/subcategory/${categoryId}?${params}`);

    return response.data;
};


const getCouponsByText = async (text: string, page?: number): Promise<DTO.SearchResult> => {
    const params = new URLSearchParams();
    params.append("search", text);
    page && params.append("page", String(page));

    const response = await axiosInstance.get(`coupons/search?${params}`);
    return response.data;
};


export const Api = {
    User: {
        signIn,
        checkAccessToken,
        signUp,
        confirmSignUp,
        recoveryPhoneForSms,
        recoveryWithConfirmCode,
        recoveryChangePassword
    },
    Info: {
        getNetworkAndContacts,
        getDescriptionAboutUs,
        getFaq,
        getMapCordinate
    },
    Coupons: {
        getCoupons,
        getTrendCoupons,
        getCouponsByCategory,
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