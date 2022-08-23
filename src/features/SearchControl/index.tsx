import {useState, useEffect, useRef, KeyboardEvent, ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import cn from "classnames";

import {couponModel} from "@/entities/coupon";
import {useOutsideAlerter} from "@/shared/hooks";
import css from "./styles.module.scss";

import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";


interface Props {
    onRedirectToResult?: () => void;
}


export const SearchControl = ({className, onRedirectToResult}: PropsWithClassName<Props>) => {
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState<couponModel.CouponInfo[]>([]);
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const {
        data,
        isLoading,
        hasNextPage,
        fetchNextPage
    } = couponModel.useSearchCouponsInfinite(searchText);


    useEffect(() => {
        if (isSubmit && hasNextPage)
            void fetchNextPage()
    }, [hasNextPage, isSubmit, isLoading]);

    useEffect(() => {
        if (data) {
            const result = data.pages
                .map(x => x.results.map(n => couponModel.convertToCouponInfo(n)))
                .flat();
            setSearchResult(result);
        }
    }, [data]);

    const searchResultRef = useRef<HTMLUListElement>(null);
    useOutsideAlerter(searchResultRef, () => setIsShowSearchResult(false));


    const searchInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchText(text);
        setIsShowSearchResult(true);

        if (!text) {
            setSearchResult([]);
            setIsShowSearchResult(false);
        }
    };

    const searchSubmitByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.type === "keydown" && (e.code === "Enter" || e.code === "NumpadEnter")) {
            submitSearch();
            navigate("/search", {
                state: {
                    query: searchText,
                    result: searchResult
                }
            });
        }
    };

    const submitSearch = () => {
        setIsShowSearchResult(false);
        onRedirectToResult?.();
        setIsSubmit(true);
    };


    return (
        <div className={cn(css.root, className)}>
            <input
                type="text"
                placeholder="Поиск"
                onChange={searchInputHandle}
                onKeyDown={searchSubmitByEnter}
            />
            <div className="grayed-icon-button" onClick={() => {
                submitSearch();
                navigate("/search", {
                    state: {
                        query: searchText,
                        result: searchResult
                    }
                });
            }}>
                <SearchIcon/>
            </div>
            {
                (isShowSearchResult && searchResult.length)
                    ? (
                        <ul ref={searchResultRef} className={css.searchResult}>
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={() => fetchNextPage()}
                                initialLoad={false}
                                hasMore={true}
                            >
                                {
                                    searchResult.map((x, i) => {
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
                            </InfiniteScroll>
                        </ul>
                    )
                    : null
            }
        </div>
    );
};