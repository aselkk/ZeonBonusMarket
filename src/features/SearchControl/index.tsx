import {KeyboardEvent, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import cn from "classnames";

import {Api, DTO} from "@/shared/api";
import {useOutsideAlerter} from "@/shared/hooks";
import css from "./styles.module.scss";

import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";


interface Props {
    className?: string,
    onRedirectToResult: () => void
}


export const SearchControl = ({className, onRedirectToResult}: Props) => {
    const navigate = useNavigate();

    const [searchResult, setSearchResult] = useState<Nullable<DTO.SearchResult>>();
    const [isShowSearchResult, setIsShowSearchResult] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);


    const searchResultRef = useRef<HTMLUListElement>(null);
    useOutsideAlerter(searchResultRef, () => setIsShowSearchResult(false));


    const searchInputHandle = (e: any) => {
        setIsShowSearchResult(true);
        const text = e.target.value;
        if (!text) {
            setSearchResult(null);
            return;
        }

        Api.Coupons.getCouponsByText(text)
            .then(data => setSearchResult(data));
    };

    const searchSubmitByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.type === "keydown" && (e.code === "Enter" || e.code === "NumpadEnter")) {
            submitSearch();
            navigate("/search", {
                state: {
                    query: inputRef.current?.value,
                    result: searchResult?.results
                }
            });
        }
    };

    const submitSearch = () => {
        if (inputRef.current)
            inputRef.current.value = "";
        setIsShowSearchResult(false);
        onRedirectToResult?.();
    };

    return (
        <div className={cn(css.root, className)}>
            <input 
                ref={inputRef}
                type="text"
                placeholder="Поиск"
                onChange={searchInputHandle}
                onKeyDown={searchSubmitByEnter}
            />
            <div className="grayed-icon-button" >
                <SearchIcon/>
            </div>
            {
                (isShowSearchResult && searchResult?.results.length)
                    ? (
                        <ul ref={searchResultRef} className={css.searchResult}>
                            {
                                searchResult.results.map((x: DTO.Coupon, i: number) => {
                                    return (
                                        <li
                                            key={x.id}
                                            className={css.searchItem}
                                            onClick={() => {
                                                submitSearch();
                                                navigate(`/coupon/${x.id}`);
                                            }}
                                        >
                                            {x.title}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    )
                    : null
            }
        </div>
    );
};

// SearchControl.propTypes = propTypes;