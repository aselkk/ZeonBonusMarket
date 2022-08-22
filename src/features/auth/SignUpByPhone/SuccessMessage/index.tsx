import css from "./styles.module.scss";
import {Button} from "@/shared/ui/Button";

import {ReactComponent as SuccessIcon} from "@/assets/icons/successPurchase.svg";



export const SuccessMessage = () => {

    return (
        <div className={css.root}>
            <div className={css.content}>
                <SuccessIcon width={60} height={60}/>
                <h2 className={css.title}>
                    Телефон подтвержден</h2>
                <Button className={css.button} linkTo="/">
                    На главную
                </Button>
            </div>
        </div>
    );
};
