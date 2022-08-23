import {useEffect} from "react";
import {atom, useRecoilState} from "recoil";
import lstore from "store";

import {Api, DTO} from "@/shared/api";


const currentUser = atom<Nullable<DTO.UserInfo>>({
    key: "currentUser",
    default: null
});


const checkAuth = async (accessToken: string): Promise<boolean> => {
    try {
        await Api.User.checkAccessToken(accessToken);
        return true;
    } catch {
        return false;
    }
};

const signUp = async (data: DTO.PhoneAuthData): Promise<string> => {
    try {
        await Api.User.signUp(data);
        return "success";
    } catch (err) {
        // TODO: потому что так работает бэкенд
        const error = err as any;
        const data = error?.response?.data;
        if (error.response?.status === 400 &&
            data.message === "Не удалось отправить сообщение. Попробуйте позже.") {
            return "success";
        }

        throw new Error(data.detail || data.message);
    }
};

const confirmSignUp = async (data: DTO.PhoneAuthConfirmData): Promise<string> => {
    await Api.User.confirmSignUp(data);
    return "success";
};


export const useAuth = () => {
    const [user, setUser] = useRecoilState(currentUser);
    const userOldValue = lstore.get("current-user") as DTO.UserInfo;

    useEffect(() => {
        if (userOldValue)
            checkAuth(userOldValue.access)
                .then(() => setUser(userOldValue));
    }, []);

    const signIn = async (phone: string, password: string): Promise<void> => {
        const data = await Api.User.signIn(phone, password);
        setUser(data);
        lstore.set("current-user", data);
    };

    const signOut = () => {
        setUser(null);
        lstore.remove("current-user");
    };


    return {
        isAuth: Boolean(user),
        user,
        signIn,
        signOut,
        signUp,
        confirmSignUp
    };
};