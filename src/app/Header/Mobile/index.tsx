import React from "react";
import {SearchControl} from "../SearchControl";
import css from "./styles.module.scss";
import "animate.css";
import {ReactComponent as CloseIcon} from "@/assets/icons/exit.svg";
import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";


export const Mobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  React.useEffect(() => void setIsMenuOpen(false), [location]);
  const menuRef = React.useRef(null);
    
  React.useEffect((): any => {
    document.body.style.overflow = isSearchOpen || isMenuOpen
      ? "hidden"
      : "scroll";
    return () => document.body.style.overflow = "scroll";
  }, [isSearchOpen, isMenuOpen]);

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
        <p className={css.logo}>
          <a href="#"> Zeon bonus </a>
        </p>
        <div className={css.icon24} onClick={() => setIsSearchOpen(prev => !prev)}>
          {
            isSearchOpen
              ? <CloseIcon/>
              : <SearchIcon/>
          }
        </div>
      </div>
      {
        (isMenuOpen)
          ? (<div className={css.menuDrawer}>
            <div ref={menuRef} className={css.menuContainer}>
              <div className={css.menuHeader}>
                <div className={css.title}> Меню </div>
                <div className={css.icon24} onClick={() => setIsMenuOpen(false)}>
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
                    <a href="#"> Избранное </a>
                  </li>
                  <li className={css.menuItem}>
                    <a href="#"> Мои купоны </a>
                  </li>
                  <li className={css.menuItem}>
                    <a href="#"> Войти </a>
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