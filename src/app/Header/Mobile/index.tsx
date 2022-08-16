import React, {useState, useEffect, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
import cn from "classnames";

import {SearchControl} from "@/features/SearchControl";
import {BurgerButton} from "@/shared/ui/BurgerButton";
import css from "./styles.module.scss";

import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";
import {ReactComponent as CloseIcon} from "@/assets/icons/exit.svg";


export const Mobile = () => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = isSearchOpen || isMenuOpen
            ? "hidden"
            : "auto";

        return () => void (document.body.style.overflow = "auto");
    }, [isSearchOpen, isMenuOpen]);

    useEffect(() => void setIsMenuOpen(false), [location]);


    return (
        <div className={css.root}>
            <div className={css.header}>
                <BurgerButton onClick={() => setIsMenuOpen(true)}/>
                <p className={css.logo}>
                    <Link to="/">Zeon bonus</Link>
                </p>
                <button className={css.btnToggleSearch}
                        onClick={() => setIsSearchOpen(prev => !prev)}
                >
                    {
                        isSearchOpen
                            ? <CloseIcon width={18} height={18}/>
                            : <SearchIcon width={18} height={18}/>
                    }
                </button>
            </div>
            <div className={css.hLine}></div>
            {
                (isMenuOpen)
                    ? (<div className={css.menuDrawer}>
                        <div ref={menuRef}
                             className={cn(css.menuContainer, "animate__animated", "animate__slideInLeft")}
                        >
                            <div className={css.menuHeader}>
                                <div className={css.title}> Меню </div>
                                <div className={css.iconBtn} onClick={() => {
                                    setIsMenuOpen(false)
                                }}>
                                    <CloseIcon/>
                                </div>
                            </div>
                            <div className={css.menuBody}>
                                <ul className={css.nav}>
                                    <li className={css.navItem}><a href="#"> О нас </a></li>
                                    <li className={css.navItem}><a href="#"> Помощь </a></li>
                                    <li className={css.navItem}><a href="#"> Контакты </a></li>
                                </ul>
                                <ul>
                                    <li className={css.menuItem}>
                                        <Link to="/favorites">Избранное</Link>
                                    </li>
                                    <li className={css.menuItem}>
                                        <Link to="/coupons/my">Мои купоны</Link>
                                    </li>
                                    <li className={css.menuItem}>
                                        <Link to="/login">Войти</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={css.menuFooter}>
                                <div className={css.tel}>
                                    <p> Тел. для справки: <hr/> <span> +996 000 00 00 00 </span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : null
            }
            {
                (isSearchOpen)
                    ? (
                        <div className={css.search}>
                            <SearchControl className={css.inputWrap} onRedirectToResult={() => setIsSearchOpen(false)}/>
                        </div>
                    ) : null
            }
        </div>
    );
};