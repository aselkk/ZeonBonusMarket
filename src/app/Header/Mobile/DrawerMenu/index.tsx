import {useRef} from "react";
import {useRecoilValue} from "recoil";
import {Link} from "react-router-dom";
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
    phone?: string;
    onClose?: () => void;
}


export const DrawerMenu = ({phone, onClose}: Props) => {
    const {user} = userModel.useAuth();
    const isExistFavorites = useRecoilValue(favoritesAtom);

    const menuRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(menuRef, () => onClose?.());


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
                            <Link to="/coupons/my">
                                <TicketIcon width={20} height={20}/> Мои купоны
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <LoginIcon width={20} height={20}/>
                                {user?.first_name || "Boйти"}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={css.footer}>
                    <p className={css.label}>Тел. для справки:</p>
                    <a className={css.value} href={`tel:${phone}`}>
                        {phone}
                    </a>
                </div>
            </div>
        </div>
    );
};