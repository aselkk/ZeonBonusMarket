import React from "react";
import {NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import cn from "classnames";

import css from "./styles.module.scss";


const CustomPropsBreadcrumb = ({someProp}: any) => (
    <span>{someProp}</span>
);

// const DynamicUserBreadcrumb = ({ match }: any) => (
//     <span>{userNamesById[match.params.userId]}</span>
// );


// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
    {path: "/", breadcrumb: "Главная"},
    {path: "/login", breadcrumb: null},
    {path: "/trends", breadcrumb: CustomPropsBreadcrumb, props: {someProp: "Новые купоны"}},
    {path: "/coupon", breadcrumb: CustomPropsBreadcrumb, props: {someProp: "Профиль"}},
    {path: "/coupon/:id", breadcrumb: CustomPropsBreadcrumb, props: {someProp: ""}},
    {path: "/search", breadcrumb: CustomPropsBreadcrumb, props: {someProp: "Результаты поиска"}},
    {path: "/about-us", breadcrumb: CustomPropsBreadcrumb, props: {someProp: "О нас"}},
    {path: "/help", breadcrumb: CustomPropsBreadcrumb, props: {someProp: "Помощь"}},
    {path: "/Contacts", breadcrumb: CustomPropsBreadcrumb, props: {someProp: "Контакты"}}
    // {path: '/example', breadcrumb: 'Custom Example'},
];


export const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);


    return (
        (breadcrumbs.length > 1)
            ? (<div className={css.breadcrumbs}>
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