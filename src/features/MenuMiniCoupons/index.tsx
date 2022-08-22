import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import css from "./styles.module.scss";

import {ReactComponent as UserIcon} from "@/assets/icons/userIcon.svg";
import {ReactComponent as CouponIcon} from "@/assets/icons/ticket11.svg";
import {ReactComponent as Phone} from "@/assets/icons/phone.svg";
import {ReactComponent as PasswordChangeIcon} from "@/assets/icons/passwordChangeIcon.svg";

import cn from "classnames";
import { userModel } from "@/entities/user";


export const MenuCoupons = () => {
    const {signOut} = userModel.useAuth();
    const navigate = useNavigate();

    return (
        <div className={css.menu}>
            <ul>
                <li>
                    <NavLink
                        to="*"
                        className={({isActive}) => cn(css.linkTo, {[css.activePathName]: isActive})}
                    >
                        <div>
                            <UserIcon
                                className={css.icons}
                            />
                        </div>
                        <p>Профиль</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/my-coupons"}
                        className={({isActive}) => cn(css.linkTo, {[css.activePathName]: isActive})}
                    >
                        <div>
                            <CouponIcon className={css.icons}/>
                        </div>
                        <p>Мои купоны</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"*"}
                        className={({isActive}) => cn(css.linkTo, {[css.activePathName]: isActive})}
                    >
                        <div>
                            <Phone className={css.icons}/>
                        </div>
                        <p>Сменить номер</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"*"}
                        className={({isActive}) => cn(css.linkTo, {[css.activePathName]: isActive})}
                    >
                        <div>
                            <PasswordChangeIcon className={css.icons}/>
                        </div>
                        <p>Сменить пароль</p>
                    </NavLink>
                </li>
            </ul>
            <p className={css.quit} onClick={() => {
                signOut()
                navigate("/");
            }}>
                Выйти из аккаунта
            </p>
            
        </div>
    );
};
