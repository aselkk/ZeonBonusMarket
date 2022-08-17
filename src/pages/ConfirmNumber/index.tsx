
import css from "./styles.module.scss";
import cn from "classnames";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";


export const ConfirmNumber = () => {
  
    return (
        <div className={css.root}>
            <form className={css.form}>
                <h5 className={css.title}>Подтверждение номера телефона</h5>
                <p className={css.number}>+996 555 55 55 55</p>
                <Link className={css.link} to="#" >Неверный номер телефона?</Link>
                <input className={css.input} type="text" placeholder="Введите код подтверждения"/>
                <Button className={css.button}>
                    Подтвердить
                </Button>
                <p className={css.message}>Не пришло SMS сообщение?</p>
                <Button className={cn(css.button, css.sendAgain)}>
                    Отправить снова через {44}
                </Button>
            </form>
        </div>
    )
}