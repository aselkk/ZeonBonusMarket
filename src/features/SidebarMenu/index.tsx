import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

import {userModel} from "@/entities/user";
import css from "./styles.module.scss";

import {ReactComponent as UserIcon} from "@/assets/icons/userIcon.svg";
import {ReactComponent as Phone} from "@/assets/icons/phone.svg";
import cn from "classnames";


export const SidebarMenu = () => {
    const {signOut} = userModel.useAuth();
    const navigate = useNavigate();

    const pathName = window.location.pathname;


    return (
        <div className={css.menu}>
            <ul>
                <li>
                    <NavLink
                        to="/about-us"
                        className={({isActive}) => cn(css.linkTo, {[css.activePathName]: isActive})}

                    >
                        <div>
                            <UserIcon
                                className={css.icons}
                            />
                        </div>
                        <p>О нас</p>
                    </NavLink>
                </li>
                <li>
                    <Link
                        to={"/contacts"}
                        className={`${css.linkTo} ${
                            pathName === "/contacts" ? css.activePathName : ""
                        }`}
                    >
                        <div>
                            <Phone
                                className={`${css.icons} ${
                                    pathName === "/contacts" ? css.activePathName : ""
                                }`}
                            />
                        </div>
                        <p>Контакты</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/help"}
                        className={`${css.linkTo} ${
                            pathName === "/help" ? css.activePathName : ""
                        }`}
                    >
                        <div>
                            <UserIcon
                                className={`${css.icons} ${
                                    pathName === "/helpPage" ? css.activePathName : ""
                                }`}
                            />
                        </div>
                        <p>Помощь</p>
                    </Link>
                </li>
            </ul>
            <p className={css.quit} onClick={() => {
                signOut()
                navigate("/");
            }}>
                Выйти <span className={css.quitText}>из аккаунта</span>{" "}
            </p>
        </div>
    );
};
