import React, {FC} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
// import * as KeyCode from "keycode-js";
// import {Utils} from "src/shared/utils";
// import {Api} from "src/shared/utils/api";
import css from "./styles.module.scss";
// import searchIcon from "src/assets/icons/search.svg";

type PropTypes = {
    className: string,
    onRedirectToResult: () => void
};

export const SearchControl: FC<PropTypes> = ({className, onRedirectToResult}) => {
    const [searchResult, setSearchResult] = React.useState<any>({});
    const [isShowSearchResult, setIsShowSearchResult] = React.useState(false);

    const searchInputHandle = (e:any) => {
        setIsShowSearchResult(true);

        const text = e.target.value;
        if (!text) {
            setSearchResult({});
            return;
        }
    };

    const inputRef = React.useRef(null);

    const searchSubmitByEnter = (e: any) => {
        // if (e.type === "keydown" && e.code === KeyCode.CODE_ENTER) {
        // navigateToSearchResult();
        // submitSearch();
        // }
    };

    return (
        <div className={cn(css.root, className)}>
            <input ref={inputRef}
                type="text"
                placeholder="Поиск"
                onChange={searchInputHandle}
                onKeyDown={searchSubmitByEnter}
            />
            <div className={css.searchIcon} >
                <img src={"searchIcon"} alt={"s"}/>
            </div>
            {
                (isShowSearchResult && searchResult.count)
                    ? (
                        <div className={css.searchResult}>
                            {
                                searchResult.matches.map((x: any, i: any) => {
                                    return (
                                        <div key={i}
                                            className={css.searchItem}
                                            // onClick={() => searchResultItemClicked(x.id)}
                                        >
                                            {x.title}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                    : null
            }
        </div>
    );
};

// SearchControl.propTypes = propTypes;