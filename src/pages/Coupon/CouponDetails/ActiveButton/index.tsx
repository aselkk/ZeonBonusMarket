import { FC } from "react";
import css from "./styles.module.scss"

export const ActiveButton: FC = () => {
    return (
        <button className={css.root}>Активировать купон</button>
    );
};