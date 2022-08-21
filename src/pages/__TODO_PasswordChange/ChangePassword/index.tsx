import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {useState} from "react";

import {ReactComponent as UnvisibleIcon} from "@/assets/icons/unvisible.svg";
import {Button} from "@/shared/ui/Button";
import cn  from "classnames";
import css from "./styles.module.scss";


type RecoveryData = {
    phone: string,
    confirmCode: string
}

type ConfirmSubmitForm = {
    password: string;
    confirmPassword: string;
};

interface Props {
    recoveryData: RecoveryData,
    setActiveBlock : (activeBlock: number) => void
}

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required("Это поле обязательно к заполнению")
        .min(6, "Длина пароля не должна быть менее 6 букв")
        .max(40, "Длина пароля не должна быть более 40 букв"),
    confirmPassword: Yup.string()
        .required("Пароли ")
        .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
});


export const ChangePassword = ({recoveryData, setActiveBlock}: Props) => {
    const [isShowPassword1, setIsShowPassword1] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ConfirmSubmitForm>({
        resolver: yupResolver(validationSchema)
    });
    
    const onSubmit = (data: ConfirmSubmitForm) => {
        const sendObject = {
            phone: recoveryData.phone,
            confirmation_code: recoveryData.confirmCode,
            new_password: data.password,
            new_password_repeat: data.confirmPassword
        };
        console.log(sendObject);
        //TODO  запрос на бэк
        setActiveBlock(4);     
    };

    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Восстановление пароля</h5>
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