import { FC } from "react";
import css from "./styles.module.scss"
import { RadioButtons } from "./RadioButtons";

export const CouponItems: FC = () => {
    return (
        <div className={css.root}>
            <RadioButtons/>
        </div>
    );
};