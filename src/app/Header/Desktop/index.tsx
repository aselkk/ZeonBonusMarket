import {useRecoilValue} from "recoil";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import cn from "classnames";

import {userModel} from "@/entities/user";
import {favoritesAtom} from "@/shared/store/favorites";
import {SearchControl} from "@/features/SearchControl";
import css from "./styles.module.scss";

import {ReactComponent as FavoritesIcon} from "@/assets/icons/favorites.svg";
import {ReactComponent as TicketIcon} from "@/assets/icons/ticket.svg";
import {ReactComponent as LoginIcon} from "@/assets/icons/log-in.svg";


export const Desktop = () => {
    const {user, isAuth} = userModel.useAuth();
    const isExistFavorites = useRecoilValue(favoritesAtom);
    const networkInfo = useSelector((state: any) => state.networkInfo.items); // TODO: убрать

    return (
        <div className={css.header}>
            <div className={cn("container", css.container)}>
                <nav className={css.navTop}>
                    <ul className={css.links}>
                        <li>
                            <Link to="/about-us">О нас</Link>
                        </li>
                        <li>
                            <Link to="/help">Помощь</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                    <p className={css.tel}>
                        Тел. для справок:&nbsp;
                        <a href={`tel:${networkInfo.phone}`}>{networkInfo.phone}</a>
                    </p>
                </nav>

                <div className={css.hLine}></div>

                <div className={css.bottom}>
                    <div className={css.logo}>
                        <Link to="/">Zeon bonus</Link>
                    </div>

                    <SearchControl className={css.inputWrap}/>

                    <ul className={css.menu}>
                        <li className={css.menuItem}>
                            <Link to="/favorites">
                                <FavoritesIcon width={20} height={20}/> Избранное
                                {isExistFavorites && <div className={css.redCircleNotify}/>}
                            </Link>
                        </li>
                        <div className={css.divider}></div>
                        <li className={css.menuItem}>
                            <Link to="/my-coupons">
                                <TicketIcon width={23} height={23}/> Мои купоны
                            </Link>
                        </li>
                        <div className={css.divider}></div>
                        <li className={css.menuItem}>
                            <Link to={isAuth ? "/my-profile" : "/login"}>
                                <LoginIcon width={20} height={20}/>
                                {isAuth ? user?.first_name : "Войти"}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={css.hLine}></div>
        </div>
    );
};