import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {DTO} from "@/shared/api";
import {userModel} from "@/entities/user";
import {Button} from "@/shared/ui/Button";
import {FormInput} from "@/shared/ui/FormInput";
import {FormPhoneInputWithFlag} from "@/shared/ui/FormPhoneInputWithFlag";
import {Alerts} from "@/shared/ui/alerts";
import {validationSchema} from "./model";
import css from "./styles.module.scss";


interface UserSubmitForm  {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
}


interface Props {
    onSuccess: (data: DTO.PhoneAuthData) => void;
}


export const InputForm = ({onSuccess}: Props) => {
    const {signUp} = userModel.useAuth();
    const [countryCode, setCountryCode] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema),
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

        try {
            await signUp(data2);
            onSuccess(data2);
        } catch (err) {
            const error = err as Error;
            await Alerts.showError(error.message);
        }
    };


    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={css.title}>Регистрация</h2>
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
                <FormInput
                    isPassword
                    autoComplete="new-password"
                    placeholder="Придумайте пароль"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <FormInput
                    isPassword
                    autoComplete="new-password"
                    placeholder="Повторите пароль"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                />
                <Button className={css.button} type="submit">
                    Далее
                </Button>
            </form>
        </div>
    );
};