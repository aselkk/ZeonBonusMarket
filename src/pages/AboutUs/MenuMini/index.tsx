import React, {FC} from "react";
import {Link} from "react-router-dom";
import css from "./styles.module.scss";

import {ReactComponent as UserIcon} from "@/assets/icons/userIcon.svg";
import {ReactComponent as Phone} from "@/assets/icons/phone.svg";


export const MenuAboutUs: FC = () => {
    const pathName: string = window.location.pathname;

    return (
        <div className={css.menu}>
            <ul>
                <li>
                    <Link
                        to={"/aboutUs"}
                        className={`${css.linkTo} ${
                            pathName === "/aboutUs" ? css.activePathName : ""
                        }`}
                    >
                        <div>
                            <UserIcon
                                className={`${css.icons} ${
                                    pathName === "/aboutUs" ? css.activePathName : ""
                                }`}
                            />
                        </div>
                        <p>О нас</p>
                    </Link>
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
                        to={"/helpPage"}
                        className={`${css.linkTo} ${
                            pathName === "/helpPage" ? css.activePathName : ""
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
            <p className={css.quit}>
        Выйти <span className={css.quitText}>из аккаунта</span>{" "}
            </p>
        </div>
    );
};
