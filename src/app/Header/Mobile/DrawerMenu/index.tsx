import {useRef} from "react";
import {useSelector} from "react-redux";
import {useRecoilValue} from "recoil";
import {Link, useNavigate} from "react-router-dom";
import cn from "classnames";

import {userModel} from "@/entities/user";
import {favoritesAtom} from "@/shared/store/favorites";
import {useOutsideAlerter} from "@/shared/hooks";
import css from "./styles.module.scss";

import {ReactComponent as CloseIcon} from "@/assets/icons/exit.svg";
import {ReactComponent as FavoritesIcon} from "@/assets/icons/favorites.svg";
import {ReactComponent as TicketIcon} from "@/assets/icons/ticket.svg";
import {ReactComponent as LoginIcon} from "@/assets/icons/log-in.svg";


interface Props {
    onClose?: () => void;
}


export const DrawerMenu = ({onClose}: Props) => {
    const navigate = useNavigate();
    const {user, isAuth, signOut} = userModel.useAuth();
    const isExistFavorites = useRecoilValue(favoritesAtom);
    const networkInfo = useSelector((state: any) => state.networkInfo.items); // TODO: убрать


    const menuRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(menuRef, () => onClose?.());

    const onQuit = () => {
        signOut()
        navigate("/");
    };


    return (
        <div className={css.menu}>
            <div
                ref={menuRef}
                className={cn(css.container, "animate__animated", "animate__slideInLeft")}
            >
                <div className={css.header}>
                    <h2 className={css.title}>Меню</h2>
                    <button
                        className="grayed-icon-button"
                        onClick={() => {
                            if (menuRef?.current) {
                                menuRef.current.classList.toggle("animate__slideOutLeft");
                                menuRef.current.onanimationend = () => onClose?.();
                            }
                        }}
                    >
                        <CloseIcon width={18} height={18}/>
                    </button>
                </div>

                <nav className={css.body}>
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

                    <div className={css.hLine}></div>

                    <ul className={css.links}>
                        <li>
                            <Link to="/favorites">
                                <FavoritesIcon width={20} height={20}/> Избранное
                                {isExistFavorites && <div className={css.redCircleNotify}/>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-coupons">
                                <TicketIcon width={20} height={20}/> Мои купоны
                            </Link>
                        </li>
                        <li>
                            <Link to={isAuth ? "/my-profile" : "/login"}>
                                <LoginIcon width={20} height={20}/>
                                {isAuth ? user?.first_name : "Войти"}
                            </Link>
                        </li>
                        {
                            isAuth && (
                                <li className={css.quitLink}>
                                    <button type="button" onClick={onQuit}>
                                        Выйти из аккаунта
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </nav>

                <div className={css.footer}>
                    <p className={css.label}>Тел. для справки:</p>
                    <a className={css.value} href={`tel:${networkInfo.phone}`}>
                        {networkInfo.phone}
                    </a>
                </div>
            </div>
        </div>
    );
};