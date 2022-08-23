import {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

import {SearchControl} from "@/features/SearchControl";
import {BurgerButton} from "@/shared/ui/BurgerButton";
import {Utils} from "@/shared/utils";
import {DrawerMenu} from "./DrawerMenu";
import css from "./styles.module.scss";

import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";
import {ReactComponent as CloseIcon} from "@/assets/icons/exit.svg";


export const Mobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        if (isSearchOpen || isMenuOpen)
            Utils.DOM.disableScrolling();
        else
            Utils.DOM.enableScrolling();

        return () => Utils.DOM.enableScrolling();
    }, [isSearchOpen, isMenuOpen]);

    useEffect(() => void setIsMenuOpen(false), [useLocation()]);


    return (
        <div className={css.root}>
            <div className={css.header}>
                <BurgerButton onClick={() => setIsMenuOpen(true)}/>
                <Link className={css.logo} to="/">
                    Zeon bonus
                </Link>
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
                isMenuOpen && <DrawerMenu onClose={() => setIsMenuOpen(false)}/>
            }
            {
                isSearchOpen && (
                    <div className={css.search}>
                        <SearchControl
                            className={css.inputWrap}
                            onRedirectToResult={() => setIsSearchOpen(false)}
                        />
                    </div>
                )
            }
        </div>
    );
};