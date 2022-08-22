import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

import {SearchControl} from "@/features/SearchControl";
import {BurgerButton} from "@/shared/ui/BurgerButton";
import {DrawerMenu} from "./DrawerMenu";
import css from "./styles.module.scss";

import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";
import {ReactComponent as CloseIcon} from "@/assets/icons/exit.svg";


interface Props {
    phone?: string;
}


export const Mobile = ({phone}: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isSearchOpen || isMenuOpen
            ? "hidden"
            : "auto";

        return () => void (document.body.style.overflow = "auto");
    }, [isSearchOpen, isMenuOpen]);

    useEffect(() => void setIsMenuOpen(false), [useLocation()]);


    return (
        <div className={css.root}>
            <div className={css.header}>
                <BurgerButton onClick={() => setIsMenuOpen(true)}/>
                <p className={css.logo}>
                    <Link to="/">Zeon bonus</Link>
                </p>
                <button
                    className="grayed-icon-button"
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
                isMenuOpen
                    ? <DrawerMenu phone={phone} onClose={() => setIsMenuOpen(false)}/>
                    : null
            }
            {
                isSearchOpen
                    ? (
                        <div className={css.search}>
                            <SearchControl className={css.inputWrap} onRedirectToResult={() => setIsSearchOpen(false)}/>
                        </div>
                    ) : null
            }
        </div>
    );
};