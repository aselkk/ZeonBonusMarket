import {useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {Button} from "@/shared/ui/Button";
import {FormPhoneInputWithFlag} from "@/shared/ui/FormPhoneInputWithFlag";
import css from "./styles.module.scss";


interface PhoneSubmitForm {
    phone: string
}

interface Props  {
    onSuccess: (phone: string) => void
}


export const PhoneForm = ({onSuccess}: Props) => {
    const [countryCode, setCountryCode] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<PhoneSubmitForm>({
        resolver: yupResolver(validationSchema),
        mode: "onSubmit"
    });

    const onSubmit = (data: PhoneSubmitForm) => {
        onSuccess(countryCode + data.phone);
    };


    return (
        <div className={css.root}>
            <form className={css.content} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={css.title}>
                    Войдите, чтобы продолжить
                </h2>
                <p className={css.errorLabel}>{errors.phone && "Номер"}</p>
                <FormPhoneInputWithFlag
                    countryCode={countryCode}
                    onCountryCodeChanged={setCountryCode}
                    placeholder="Введите номер телефона"
                    {...register("phone")}
                    error={errors.phone?.message}
                />

                <Button className={css.button} type="submit">
                    Войти
                </Button>
                <Link to={"/signup"} className={css.link}>
                    Зарегистрироваться
                </Link>
            </form>
        </div>
    );
};


const validationSchema = Yup.object().shape({
    phone: Yup.string()
        .required("Введите номер телефона")
        .min(9, "Длина номера телефона не менее 9 цифр")
});