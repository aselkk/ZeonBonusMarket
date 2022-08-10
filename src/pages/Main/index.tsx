import React, {FC} from "react";
import css from "./style.module.scss";
import cn from "classnames";

import {Groups} from "./Groups";
import {Card} from "@/entities/Card";


export const Main: FC = () => {
    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <Groups/>
                <div className={css.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </main>
    );
};


