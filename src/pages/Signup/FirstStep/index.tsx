import { useState } from "react";
import FlagsSelect from "react-flags-select";
import { Button } from "@/shared/ui/Button";
import { ReactComponent as UnvisibleIcon } from "@/assets/icons/unvisible.svg";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import css from "./styles.module.scss";
import cn  from "classnames";


const countryCodes: any = {
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

export interface Data {
    phone: string,
    password: string,
    first_name: string,
    last_name: string,
    password2: string
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Это поле обязательно к заполнению')
        .min(3, 'Имя должно быть минимум из 3 букв')
        .max(20, 'Имя должно быть максимум из 20 букв'),
    lastName: Yup.string()
        .required('Это поле обязательно к заполнению')
        .min(3, 'Имя должно быть минимум из 3 букв')
        .max(20, 'Имя должно быть максимум из 20 букв'),
    phone: Yup.number()
        .required('Введите номер телефона')
        .positive('Введите положительное число')
        .integer('Введите целые числа')
        .min(10000, 'Длина номера телефона не менее 5 цифр'),
    password: Yup.string()
        .required('Это поле обязательно к заполнению')
        .min(6, 'Длина пароля не должна быть менее 6 букв')
        .max(40, 'Длина пароля не должна быть более 40 букв'),
    confirmPassword: Yup.string()
        .required('Пароли ')
        .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
});

interface Prop {
    setSubmitResult: (data: Data) => void,
    setActiveBlock: (activeBlock: number) => void
}

export const FirstStep = ({setSubmitResult, setActiveBlock}: Prop) => {
    
    const [ selectedCountryCode, setSelectedCountryCode] = useState("KG")
    const [isShowPassword1, setIsShowPassword1] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
    
    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        setSubmitResult({
            phone: countryCodes[selectedCountryCode] + data.phone,
            password: data.password,
            first_name: data.firstName,
            last_name: data.lastName,
            password2: data.confirmPassword
        })
        setActiveBlock(1)
    };
    
    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Регистрация</h5>
                <div className={css.formGroup}>
                    <input 
                        className={cn(css.input, css.show)} 
                        type="text" 
                        placeholder="Имя"
                        {...register("firstName")}
                    />
                     <div className={css.invalidFeedback}>{errors.firstName?.message}</div>
                </div>
                <div className={css.formGroup}>
                    <input 
                        className={css.input} 
                        type="text" 
                        placeholder="Фамилия"
                        {...register("lastName")}
                    />     <div className={css.invalidFeedback}>{errors.lastName?.message}</div>
                </div>
                <div className={css.formGroup}>
                    <div className={css.wrapPhone}>
                        <FlagsSelect
                            countries={["KG", "RU", "KZ", "US", "GB"]}
                            customLabels={countryCodes}
                            selected={selectedCountryCode}
                            onSelect={(code) => setSelectedCountryCode(code)}
                            className={css.flag}
                        />
                        <input 
                            className={cn(css.input, css.phone)} 
                            type="number" 
                            placeholder="Номер телефона"
                            {...register("phone")}
                        />
                    </div>
                    <div className={css.invalidFeedback}>{errors.phone?.message}</div>
                </div>
                <div className={css.formGroup}>
                    <div className={css.wrapPassword}>
                        <input 
                            className={cn(css.input, css.inputWithIcon)} 
                            type={isShowPassword1 ? "text" : "password"}
                            placeholder="Придумайте пароль"
                            {...register("password")}
                        />
                        <UnvisibleIcon 
                            className={css.unvisible} 
                            onMouseDown={() => setIsShowPassword1(true)}
                            onMouseUp={() => setIsShowPassword1(false)}
                        />
                    </div>
                    <div className={css.invalidFeedback}>{errors.password?.message}</div>
                </div>
                <div className={css.formGroup}>
                    <div className={css.wrapPassword}>
                        <input 
                            className={cn(css.input, css.inputWithIcon)} 
                            type={isShowPassword2 ? "text" : "password"} 
                            placeholder="Повторите пароль"
                            {...register("confirmPassword")}
                        />
                        <UnvisibleIcon 
                            className={css.unvisible} 
                            onMouseDown={() => setIsShowPassword2(true)}
                            onMouseUp={() => setIsShowPassword2(false)}
                        />
                    </div>
                    <div className={css.invalidFeedback}>{errors.confirmPassword?.message}</div>
                </div>
                <Button className={css.button} type="submit">
                    Далее
                </Button>
            </form>
        </div>
    );
};
