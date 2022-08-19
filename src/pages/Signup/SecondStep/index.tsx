import React, { useState } from "react";
import { Timer } from "./Timer";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from "yup";

import { Button } from "@/shared/ui/Button";
import css from "./styles.module.scss";
import cn from "classnames";


type ConfirmSubmitForm = {
    confirmCode: string;
};

interface Data {
    phone: string,
    password: string,
    first_name: string,
    last_name: string,
    password2: string
}

interface Prop {
    userData : Data,
    setActiveBlock: (activeBlock: number) => void
}

const validationSchema = Yup.object().shape({
    confirmCode: Yup.string()
        .required('Введите код подтверждения')
        .min(3, 'Минимальное количество символов 3')
        .max(10, 'Максильное количество символов 10'),
});

export const SecondStep = ({userData, setActiveBlock}: Prop) => {
    const [isTimeOut, setIsTimeOut] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm<ConfirmSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: ConfirmSubmitForm) => {
        setActiveBlock(2)
    };

    const handleSendBtn = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        isTimeOut ? setIsTimeOut(false) : null
    }

    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Подтверждение номера телефона</h5>
                <p className={css.number}>{userData.phone}</p>
                <p className={css.link} onClick={() => setActiveBlock(0)}>
                    Неверный номер телефона?
                </p>
                <div className={css.formGroup}>
                    <input className={css.input} 
                        type="text" 
                        placeholder="Введите код подтверждения"
                        {...register("confirmCode")}
                    />
                    <div className={css.invalidFeedback}>{errors.confirmCode?.message}</div>
                </div>
                <Button className={css.button} type="submit">
                    Подтвердить
                </Button>
                <p className={css.message}>Не пришло SMS сообщение?</p>
                <Button 
                    className={isTimeOut ? css.button: cn(css.button, css.sendAgain)}
                    onClick={handleSendBtn}
                >
                    {isTimeOut ? 
                    (
                    <span className={css.span}>Отправить</span> 
                    ) : (
                        <>
                            <span className={css.span}>Отправить снова через</span> 
                            <Timer setIsTimeOut ={setIsTimeOut} isTimeOut={isTimeOut}/> 
                        </>   
                    )}
                 
                </Button>
            </form>
        </div>
    )
}