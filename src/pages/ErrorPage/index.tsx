import React from "react";
import css from "./styles.module.scss";
import cn from "classnames";
import {Link} from "react-router-dom";


export const ErrorPage = () => {
    return (
        <div className={css.errorPage}>
            <div className={cn("container", css.container)}>
                <p>Ошибка</p>
                <h3>404</h3>
                <span>Страница не найдена</span>
                <Link to={"/"}>
                    <button>На главную</button>
                </Link>
            </div>
        </div>
    );
};
