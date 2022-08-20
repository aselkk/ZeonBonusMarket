import {useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from "yup";

import {Button} from "@/shared/ui/Button";
import css from "./styles.module.scss";
import cn  from "classnames";
import {ReactComponent as UnvisibleIcon} from "@/assets/icons/unvisible.svg";


interface Prop {
    setActiveBlock: (activeBlock: number) => void,
    phone: string
}

type PasswordSubmitForm = {
    password: string;
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required("Это поле обязательно к заполнению")
        .min(6, "Длина пароля не должна быть менее 6 букв")
        .max(40, "Длина пароля не должна быть более 40 букв")
});

export const LoginByPassword = ({setActiveBlock, phone}: Prop) => {
    const [isShowPassword1, setIsShowPassword1] = useState(false);
    
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<PasswordSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: PasswordSubmitForm) => {
        const obj = {
            ...data,
            phone
        };
        console.log(obj);   
    };

    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Войдите, чтобы продолжить</h5>
                <p className={css.number}>{phone}</p>
                <div className={css.formGroup}>
                    <div className={css.wrapPassword}>
                        <input 
                            className={cn(css.input, css.inputWithIcon)} 
                            type={isShowPassword1 ? "text" : "password"}
                            placeholder="Введите пароль"
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
                <Button className={css.button} type="submit">
                    Войти
                </Button>
                <p className={css.link} onClick={() => setActiveBlock(2)}>
                    Не помню пароль
                </p>
            </form>
        </div>
    );
};