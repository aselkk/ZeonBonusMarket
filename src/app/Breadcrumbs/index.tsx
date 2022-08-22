import React from "react";
import {NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import cn from "classnames";

import css from "./styles.module.scss";


const CustomPropsBreadcrumb = ({title}: { title: string }) => (
    <span>{title}</span>
);


const routes: object[] = [
    {path: "/signup", breadcrumb: null, props: null},
    {path: "/login", breadcrumb: null, props: null},
    {path: "/", breadcrumb: CustomPropsBreadcrumb, props: {title: "Главная"}},
    {path: "/trends", breadcrumb: CustomPropsBreadcrumb, props: {title: "Новые купоны"}},
    {path: "/favorites", breadcrumb: CustomPropsBreadcrumb, props: {title: "Избранное"}},
    {path: "/search", breadcrumb: CustomPropsBreadcrumb, props: {title: "Результаты поиска"}},
    {path: "/category", breadcrumb: CustomPropsBreadcrumb, props: {title: "Категория"}},
    {path: "/category/:id", breadcrumb: null, props: null},
    {path: "/coupon/", breadcrumb: CustomPropsBreadcrumb, props: {title: "Купон"}},
    {path: "/coupon/:id", breadcrumb: null, props: null},
    {path: "/partner", breadcrumb: CustomPropsBreadcrumb, props: {title: "Партнер"}},
    {path: "/partner/:id", breadcrumb: null, props: null},
    {path: "/contacts", breadcrumb: CustomPropsBreadcrumb, props: {title: "Контакты"}},
    {path: "/about-us", breadcrumb: CustomPropsBreadcrumb, props: {title: "О нас"}},
    {path: "/help", breadcrumb: CustomPropsBreadcrumb, props: {title: "Помощь"}},
    {path: "/privacy-policy", breadcrumb: CustomPropsBreadcrumb, props: {title: "Политика конфиденциальности"}}
];


export const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        (breadcrumbs.length > 1)
            ? (
                <div className={css.breadcrumbs}>
                    <div className={cn("container", css.container)}>
                        {
                            breadcrumbs
                                .map(({match, breadcrumb}, i) => {
                                    return (
                                        <span className={css.link} key={match.pathname}>

                                        <NavLink
                                            className={css.link}
                                            to={match.pathname}
                                        >
                                            {breadcrumb}
                                        </NavLink>
                                            {
                                                (breadcrumbs.length - 1 !== i)
                                                    ? <span>&nbsp;/&nbsp;</span>
                                                    : null
                                            }
                                    </span>
                                    );
                                })
                        }
                    </div>

                </div>
            )
            : null
    );
};