import React, {FC} from "react";
import css from "./style.module.scss";
import cn from "classnames";

import {Groups} from "./Groups";


export const Main: FC = () => {
    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <Groups/>
            </div>
        </main>
    );
};