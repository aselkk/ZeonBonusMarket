import {useEffect, useState} from "react";
import {atom, selector, useRecoilState} from "recoil";
import lstore from "store";
import {Api, DTO} from "@/shared/api";



const loginAtom = atom<Nullable<DTO.UserInfo>>({
    key: "user",
    default: null
});


const currentUser = selector<Nullable<DTO.UserInfo>>({
    key: "currentUser",
    get: ({get}) => get(loginAtom),
    set: ({set}, newValue) => {
        set(loginAtom, newValue);
    }
});


const checkAuth = async (accessToken: string): Promise<boolean> => {
    try {
        await Api.User.checkAccessToken(accessToken);
        return true;
    } catch {
        return false;
    }
};


export const useAuth = () => {
    const [user, setUser] = useRecoilState(currentUser);
    const userOldValue = lstore.get("current-user") as DTO.UserInfo;

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (userOldValue)
            checkAuth(userOldValue.access)
                .then(data => {
                    setIsAuth(data);
                    setUser(userOldValue);
                });
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

            const msg = data.detail || data.message;
            throw new Error(msg);
        }
    };


    const confirmSignUp = async (data: DTO.PhoneAuthConfirmData): Promise<string> => {
        await Api.User.confirmSignUp(data);
        return "success";
    };

    return {
        isAuth: isAuth,
        user,
        signIn,
        signOut,
        signUp,
        confirmSignUp
    };
};

// TODO: https://newdevzone.com/posts/how-to-update-atoms-state-in-recoiljs-outside-components-react