import React, { useState } from "react";
import { Timer } from "./Timer";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import FlagsSelect from "react-flags-select";

import { Button } from "@/shared/ui/Button";
import css from "./styles.module.scss";
import cn from "classnames";

const countryCodes: any = {
    KG: "+996",
    RU: "+7",
    KZ: "+7",
    US: "+775",
    GB: "+50"
};

type RecoverySubmitForm = {
    phone: string,
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
    setActiveBlock: (activeBlock: number) => void,
    setRecoveryData: (recoveryData: RecoverySubmitForm) => void
}

const validPhoneSchema = Yup.object().shape({
    phone: Yup.number()
    .required('Введите номер телефона')
    .positive('Введите положительное число')
    .integer('Введите целые числа')
    .min(10000, 'Длина номера телефона не менее 5 цифр'),
});

const validConfirmSchema = Yup.object().shape({
    confirmCode: Yup.string()
        .required('Введите код подтверждения')
        .min(3, 'Минимальное количество символов 3')
        .max(10, 'Максильное количество символов 10'),
});

export const PasswordRecovery = ({setActiveBlock, setRecoveryData}: Prop) => {
    const [isTimeOut, setIsTimeOut] = useState(false)
    const [selectedCountryCode, setSelectedCountryCode] = useState("KG")
    const [isRecovery, setIsRecovery] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm<RecoverySubmitForm>({
        resolver: yupResolver(isRecovery ? validConfirmSchema : validPhoneSchema)
    });

    const onSubmit = (data: RecoverySubmitForm) => {
        console.log(data); 

        isRecovery && setRecoveryData(data) 
        isRecovery && setActiveBlock(3)
        setIsRecovery(true)  
    };

    const handleSendBtn = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        isTimeOut ? setIsTimeOut(false) : null
    }

    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Восстановление пароля</h5>
                <p className={css.text} >
                    Введите номер телефона чтобы отправить код подтверждения
                </p>

                <div className={css.formGroup}>
                    <div className={errors.phone?.message ? cn(css.wrapPhone, css.error) : css.wrapPhone}>
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
                {isRecovery && (
                    <div className={css.formGroup}>
                        <input className={css.input} 
                            type="text" 
                            placeholder="Введите код подтверждения"
                            {...register("confirmCode")}
                        />
                        <div className={css.invalidFeedback}>{errors.confirmCode?.message}</div>
                    </div>
                )}
                <Button className={css.button} type="submit">
                    Далее
                </Button>
                {isRecovery && (
                    <>
                        <p className={css.message}>Не пришло SMS сообщение?</p>
                        <Button 
                            className={css.sendAgain}
                            onClick={handleSendBtn}
                        >
                            {isTimeOut ? 
                            (
                            <span className={css.span}>Отправить снова</span> 
                            ) : (
                                <>
                                    <span className={css.span}>Отправить снова через</span> 
                                    <Timer setIsTimeOut ={setIsTimeOut} isTimeOut={isTimeOut}/> 
                                </>   
                            )}               
                        </Button>
                    </>
                )}
              
            </form>
        </div>
    )
}