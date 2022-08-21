import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {Button} from "@/shared/ui/Button";
import {FormInput} from "@/shared/ui/FormInput";
import css from "./styles.module.scss";

import {userModel} from "@/entities/user";


interface Props {
    onSuccess: () => void,
    phone: string
}

type PasswordSubmitForm = {
    password: string;
};


export const PasswordForm = ({onSuccess, phone}: Props) => {
    const {signIn} = userModel.useAuth();

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors}
    } = useForm<PasswordSubmitForm>({
        resolver: yupResolver(validationSchema),
        mode: "onSubmit"
    });

    const fetchUser = async (password: string) => {
        try {
            await signIn(phone, password);
            onSuccess();
        } catch (err) {
            setError("password", {type: "custom", message: "Неверный пароль"});
        }
    };

    const onSubmit = (data: PasswordSubmitForm) => {
        void fetchUser(data.password);
    };


    return (
        <div className={css.root}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={css.title}>Войдите, чтобы продолжить</h3>
                <h4 className={css.number}>{phone}</h4>
                <p className={css.errorLabel}>{errors.password && "Пароль"}</p>
                <FormInput
                    isPassword
                    placeholder="Введите пароль"
                    autoComplete="on"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <Button className={css.button} type="submit">
                    Войти
                </Button>
                <Link className={css.link} to="/">
                    Не помню пароль
                </Link>
            </form>
        </div>
    );
};


const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required("Это поле обязательно к заполнению")
});