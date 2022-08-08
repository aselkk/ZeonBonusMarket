import React, {FC} from "react";
import css from "./style.module.scss";



export const Main: FC = () => {
    return (
        <ul className={css.root}>
            <li>lol</li>
            <li>kek</li>
            <li>cheburek</li>
            <li>chelovek</li>
        </ul>
    );
}