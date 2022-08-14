import css from "./styles.module.scss";
import cn from "classnames";
import {SearchControl} from "../SearchControl";
import {ReactComponent as Favorites} from "@/assets/icons/favorites.svg";
import {ReactComponent as Login} from "@/assets/icons/log-in.svg";

import {ReactComponent as Ticket} from "@/assets/icons/ticket.svg";


export const Desktop = () => {

    return (
        <div className={css.header}>
            <div className={cn("container", css.container)}>
                <div className={css.top}>
                    <ul className={css.nav}>
                        <li className={css.navItem}><a href="#"> О нас </a></li>
                        <li className={css.navItem}><a href="#"> Помощь </a></li>
                        <li className={css.navItem}><a href="#"> Контакты </a></li>
                    </ul>
                    <div className={css.tel}>
                        <p>Тел. для справок: <span> +996 000 00 00 00 </span></p>
                    </div>
                </div>
                <div className={css.hline}></div>
                <div className={css.bottom}>
                    <p className={css.logo}>
                        <a href="#"> Zeon bonus </a>
                    </p>
                    <SearchControl className={css.inputWrap} onRedirectToResult={() => {}}/>
                    <div className={css.menu}>
                        <ul>
                            <li className={css.menuItem}>
                                <a href="#"> <Favorites/> Избранное </a>
                            </li>
                            <div className={css.dividor}></div>
                            <li className={css.menuItem}> 
                                <a href="#"> <Ticket/> Мои купоны </a>
                            </li>
                            <div className={css.dividor}></div>
                            <li className={css.menuItem}> 
                                <a href="#"> <Login/> Войти </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};