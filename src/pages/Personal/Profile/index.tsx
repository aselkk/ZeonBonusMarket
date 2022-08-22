import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {DTO} from "@/shared/api";
import {userModel} from "@/entities/user";
import {Button} from "@/shared/ui/Button";
import {FormInput} from "@/shared/ui/FormInput";
import {FormPhoneInputWithFlag} from "@/shared/ui/FormPhoneInputWithFlag";
import {Alerts} from "@/shared/ui/alerts";
import css from "./styles.module.scss";
import {MenuCoupons} from "@/features/MenuMiniCoupons";
import cn from "classnames";


interface UserSubmitForm {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
}


interface Props {
    onSuccess: (data: DTO.PhoneAuthData) => void;
}


export const Profile = () => {
    const {signUp} = userModel.useAuth();
    const [countryCode, setCountryCode] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserSubmitForm>({
        // resolver: yupResolver(),
        mode: "onSubmit"
    });


    const onSubmit = async (data: UserSubmitForm) => {
        // TODO: rename
        const data2 = {
            phone: countryCode + data.phone,
            password: data.password,
            first_name: data.firstName,
            last_name: data.lastName,
            password2: data.confirmPassword
        };

    };


    return (
        <div className={css.contacts}>
            <div className={cn("container", css.container)}>
                <MenuCoupons/>

                <div className={css.content}>
                    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                        <h2 className={css.title}>Профлиь</h2>
                        <FormInput
                            placeholder="Имя"
                            autoComplete="no"
                            {...register("firstName")}
                            error={errors.firstName?.message}
                        />
                        <FormInput
                            placeholder="Фамилия"
                            autoComplete="no"
                            {...register("lastName")}
                            error={errors.lastName?.message}
                        />
                        <FormPhoneInputWithFlag
                            countryCode={countryCode}
                            autoComplete="username"
                            onCountryCodeChanged={setCountryCode}
                            placeholder="Номер телефона"
                            {...register("phone")}
                            error={errors.phone?.message}
                        />
                        <Button className={css.button} type="submit">
                            Далее
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};