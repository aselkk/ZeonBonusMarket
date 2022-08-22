import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import cn from "classnames";

import {userModel} from "@/entities/user";
import {DTO} from "@/shared/api";
import {Button} from "@/shared/ui/Button";
import {FormInput} from "@/shared/ui/FormInput";
import {Alerts} from "@/shared/ui/alerts";
import {Timer} from "@/shared/ui/Timer";
import css from "./styles.module.scss";


interface FormData {
    confirmCode: string;
}


interface Props {
    phoneAuthData: DTO.PhoneAuthData;
    onSuccess: () => void;
    onReject: () => void;
}


export const ConfirmationForm = ({phoneAuthData, onSuccess, onReject}: Props) => {
    const {confirmSignUp, signIn} = userModel.useAuth();

    const [isTimeOut, setIsTimeOut] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
        mode: "onSubmit"
    });

    const confirmPhone = async (data: FormData) => {
        await confirmSignUp({
            ...phoneAuthData,
            confirmation_code: data.confirmCode
        });
    };

    const onSubmit = async (data: FormData) => {
        try {
            await confirmPhone(data);
            await signIn(phoneAuthData.phone, phoneAuthData.password);
            onSuccess();
        } catch (err) {
            const error = err as Error;
            await Alerts.showError(error.message);
        }
    };

    const handleSendBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        isTimeOut ? setIsTimeOut(false) : null;
    };

    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Подтверждение номера телефона</h5>
                <p className={css.number}>
                    {phoneAuthData.phone}
                </p>
                <Link to="" className={css.link} onClick={onReject}>
                    Неверный номер телефона?
                </Link>
                <FormInput
                    placeholder="Введите код подтверждения"
                    {...register("confirmCode")}
                />
                <Button className={css.button} type="submit">
                    Подтвердить
                </Button>
                <p className={css.message}>Не пришло SMS сообщение?</p>
                <Button
                    className={isTimeOut ? css.button : cn(css.button, css.sendAgain)}
                    onClick={handleSendBtn}
                >
                    {isTimeOut ?
                        (
                            <span className={css.span}>Отправить</span>
                        ) : (
                            <>
                                <span className={css.span}>Отправить снова через</span>
                                <Timer setIsTimeOut={setIsTimeOut} isTimeOut={isTimeOut}/>
                            </>
                        )}

                </Button>
            </form>
        </div>
    );
};


const validationSchema = Yup.object()
    .shape({
        confirmCode: Yup.string()
            .required("Введите код подтверждения")
    });
