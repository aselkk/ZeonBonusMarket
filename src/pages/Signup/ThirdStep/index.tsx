import css from "./styles.module.scss";
import { Button } from "@/shared/ui/Button";
import { ReactComponent as Success } from "@/assets/icons/successPurchase.svg";
import { useNavigate } from "react-router-dom";

export const ThirdStep = () => {

    const navigate = useNavigate()

    return (
        <div className={css.root}>
            <div className={css.contant}>
                <Success/>
                <h5 className={css.title}>Телефон подтвержден</h5>
                <Button 
                    className={css.button}
                    onClick={() => navigate("/")}
                >
                    На главную
                </Button>
            </div>
        </div>
    )
}
