import { useState } from "react";
import FlagsSelect from "react-flags-select";
import { Button } from "@/shared/ui/Button";
import css from "./styles.module.scss";
import cn  from "classnames";
import { ReactComponent as UnvisibleIcon } from "@/assets/icons/unvisible.svg";

const countryCodes = {
    KG: "+996",
    RU: "+7",
    KZ: "+7",
    US: "+775",
    GB: "+50"
};

export const Signup = () => {
    
    const [ selected, setSelected] = useState("KG")
    

    return (
        <div className={css.root}>
            <form className={css.form}>
                <h5 className={css.title}>Регистрация</h5>
                <input className={cn(css.input, css.show)} type="text" placeholder="Имя" name=""/>
                <input className={css.input} type="text" placeholder="Фамилия"/>
                <div className={css.wrapPhone}>
                    <FlagsSelect
                        countries={["KG", "RU", "KZ", "US", "GB"]}
                        customLabels={countryCodes}
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        className={css.flag}
                    />
                    <input className={cn(css.input, css.phone)} type="number" placeholder="Номер телефона"/>
                </div>
                <div className={css.wrapPass}>
                    <input className={cn(css.input, css.show)} type="password" placeholder="Придумайте пароль"/>
                    <UnvisibleIcon className={css.unvisible}/>
                </div>
                <input className={css.input} type="password" placeholder="Повторите пароль"/>
                <Button className={css.button}>
                    Далее
                </Button>
            </form>
        </div>
    );
};