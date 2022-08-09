import React from "react";
import {Link, useLocation} from "react-router-dom";
import {SearchControl} from "../SearchControl";
import css from "./styles.module.scss";
import 'animate.css';

// import menuIcon from "src/assets/icons/menu-burger.svg";
// import searchIcon from "src/assets/icons/search.svg";
// import closeIcon from "src/assets/icons/x-mark.svg";
// import emptyHeartIcon from "src/assets/icons/empty-heart.svg";
// import shoppingBagIcon from "src/assets/icons/shopping-bag.svg";

export const Mobile = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)
    React.useEffect(() => void setIsMenuOpen(false), [location]);
    const menuRef = React.useRef(null);

    console.log("MOBILE");
    return (
        <div className={css.root}>
            <div className={css.header}>
            <button 
                className={css.openBurger}
                onClick={() => setIsMenuOpen(true)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={css.icon24} onClick={() => setIsSearchOpen(prev => !prev)}>
                    {
                        isSearchOpen
                            ? <p>x</p>
                            : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8132 13.1103C10.3422 14.2536 8.491 14.793 6.63649 14.6186C4.78198 14.4442 3.06363 13.5691 1.83132 12.1717C0.599008 10.7742 -0.0546018 8.95929 0.00357543 7.09656C0.0617527 5.23384 0.827343 3.46334 2.14446 2.14555C3.46157 0.827763 5.23118 0.0617841 7.09296 0.00357725C8.95473 -0.0546296 10.7687 0.599313 12.1655 1.83225C13.5622 3.06519 14.4368 4.78442 14.6111 6.63987C14.7854 8.49532 14.2464 10.3475 13.1037 11.8192L18 16.6997L16.7004 18L11.8224 13.1103H11.8132ZM7.32873 12.8173C8.04984 12.8173 8.7639 12.6752 9.43013 12.3991C10.0964 12.123 10.7017 11.7183 11.2116 11.2082C11.7215 10.698 12.126 10.0923 12.402 9.42577C12.6779 8.7592 12.8199 8.04478 12.8199 7.3233C12.8199 6.60181 12.6779 5.88739 12.402 5.22083C12.126 4.55426 11.7215 3.94861 11.2116 3.43844C10.7017 2.92828 10.0964 2.52359 9.43013 2.24749C8.7639 1.97139 8.04984 1.82928 7.32873 1.82928C5.87236 1.82928 4.47565 2.40811 3.44585 3.43844C2.41604 4.46877 1.8375 5.86619 1.8375 7.3233C1.8375 8.7804 2.41604 10.1778 3.44585 11.2082C4.47565 12.2385 5.87236 12.8173 7.32873 12.8173Z" fill="#201F21"/>
                                </svg>
                    }
                </div>
            </div>
            {
                (isMenuOpen)
                    ? (<div className={css.menuDrawer}>
                            <div ref={menuRef} className={css.menuContainer}>
                                <div className={css.menuHeader}>
                                    <div className={css.title}>Меню</div>
                                    <div className={css.icon24} onClick={() => setIsMenuOpen(false)}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={css.menuBody}>
                                        <ul className={css.nav}>
                                            <li className={css.navItem}><a href="#">О нас</a></li>
                                            <li className={css.navItem}><a href="#">Помощь</a></li>
                                            <li className={css.navItem}><a href="#">Контакты</a></li>
                                        </ul>
                                    <ul>
                                        <li className={css.menuItem}>
                                            <a href="#">
                                                Избранное 
                                            </a>
                                        </li>
                                        <li className={css.menuItem}>
                                            <a href="#">
                                                Мои купоны 
                                            </a>
                                        </li>
                                        <li className={css.menuItem}>
                                            <a href="#">
                                                Войти
                                            </a>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className={css.menuFooter}>
                                    <div className={css.tel}>
                                        <p>Тел. для справки: <hr/> <span>+996 000 00 00 00 </span></p>
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