import {useState, useRef} from "react";
import FlagsSelect from "react-flags-select";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {Button} from "@/shared/ui/Button";
import css from "./styles.module.scss";
import cn from "classnames";

const countryCodes = {
    KG: "+996",
    RU: "+7",
    KZ: "+7",
    US: "+775",
    GB: "+50"
};


type UserSubmitForm = {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Fullname is required')
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must not exceed 20 characters'),
    lastName: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must not exceed 20 characters'),
    phone: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
});


export const Signup = () => {
    const [selected, setSelected] = useState("KG")

    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });
    // console.log("FORM,", errors);


    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
    };


    const [isShowPassword1, setIsShowPassword1] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);


    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Регистрация</h5>
                <div className={css.formGroup}>
                    <input
                        className={css.input}
                        type="text"
                        {...register("firstName")}
                        placeholder="Имя"
                    />
                    <div className={css.invalidFeedback}>{errors.firstName?.message}</div>
                </div>
                <div className={css.formGroup}>
                    <input
                        className={css.input}
                        type="text"
                        {...register("lastName")}
                        placeholder="Фамилия"
                    />
                    <div className={css.invalidFeedback}>{errors.lastName?.message}</div>
                </div>

                <div>
                    <FlagsSelect
                        countries={["KG", "RU", "KZ", "US", "GB"]}
                        customLabels={countryCodes}
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                    />
                </div>
                <div className={css.formGroup}>
                    <input
                        className={css.input}
                        type="number"
                        {...register("phone")}
                        placeholder="Номер телефона"
                    />
                    <div className={css.invalidFeedback}>{errors.phone?.message}</div>
                </div>

                <div className={css.formGroup}>
                    <input
                        className={css.input}
                        onMouseDown={() => setIsShowPassword1(true)}
                        onMouseUp={() => setIsShowPassword1(false)}
                        type={isShowPassword1 ? "text" : "password"}
                        {...register("password")}
                        placeholder="Придумайте пароль"
                    />
                    <div className={css.invalidFeedback}>{errors.password?.message}</div>
                </div>
                <div className={css.formGroup}>
                    <input
                        className={css.input}
                        type="password"
                        {...register("confirmPassword")}
                        placeholder="Повторите пароль"
                    />
                    <div className={css.invalidFeedback}>{errors.confirmPassword?.message}</div>
                </div>
                <Button className={css.button} type="submit">
                    Далее
                </Button>
            </form>
        </div>
    );
};