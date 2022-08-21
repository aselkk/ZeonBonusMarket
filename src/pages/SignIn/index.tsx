import {Fragment, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useRecoilValue, useSetRecoilState, useRecoilState} from "recoil";

import {Api} from "@/shared/api";
import {PhoneForm} from "./PhoneForm";
import {PasswordForm} from "./PasswordForm";
import {userModel} from "@/entities/user";


export const SignIn = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");


    return (
        <Fragment>
            {
                (!phone)
                    ? <PhoneForm onSuccess={phone => setPhone(phone)}/>
                    : <PasswordForm
                        phone={phone}
                        onSuccess={() => navigate("/")}
                    />
            }
        </Fragment>
    );
};