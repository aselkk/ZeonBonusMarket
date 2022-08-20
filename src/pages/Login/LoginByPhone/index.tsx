import {useState} from "react";
import FlagsSelect from "react-flags-select";
import {Button} from "@/shared/ui/Button";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import css from "./styles.module.scss";
import cn  from "classnames";
import {Link} from "react-router-dom";


const countryCodes: any = {
    KG: "+996",
    RU: "+7",
    KZ: "+7",
    US: "+775",
    GB: "+50"
};

type PhoneSubmitForm = {
    phone: string;
};

type Prop = {
    setActiveBlock : (activeBlock: number) => void,
    setPhone: (phone: string) => void
}


const validationSchema = Yup.object().shape({   
    phone: Yup.number()
        .required("Введите номер телефона")
        .positive("Введите положительное число")
        .integer("Введите целые числа")
        .min(10000, "Длина номера телефона не менее 5 цифр")
});

export const LoginByPhone = ({setActiveBlock, setPhone}: Prop) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState("KG");

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<PhoneSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: PhoneSubmitForm) => {
        setPhone( countryCodes[selectedCountryCode] + data.phone);
        setActiveBlock(1);
    };

    return (
        <div className={css.root}>
            <form className={css.contant} onSubmit={handleSubmit(onSubmit)}>
                <h5 className={css.title}>Войдите, чтобы продолжить</h5>
                <div className={css.formGroup}>
                    <div className={css.invalidFeedback}>{errors.phone?.message && "Номер"}</div>
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
                <Button className={css.button}>
                    Войти
                </Button>
                <Link to={"/signup"} className={css.link}>
                    Зарегистрироваться
                </Link>
            </form>
        </div>
    );
};
