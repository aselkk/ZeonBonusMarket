import {useState, Fragment} from "react";
import {useNavigate} from "react-router-dom";

import {PhoneForm} from "./PhoneForm";
import {PasswordForm} from "./PasswordForm";


export const SignInByPhone= () => {
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