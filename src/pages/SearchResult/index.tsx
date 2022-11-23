import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import cn from "classnames";

import {DTO} from "@/shared/api";
import {CouponCard, couponModel} from "@/entities/coupon";
import {CardsContainer} from "@/features/CardsContainer";

import css from "./styles.module.scss";


const enum SortType {
    AlphabetAsc,
    PriceAsc,
    PriceDesc
}

const priceLabels: any = {
    [SortType.AlphabetAsc]: "алфавиту",
    [SortType.PriceAsc]: "цене (низкая > высокая)",
    [SortType.PriceDesc]: "цене (высокая > низкая)",
}

interface LocationState {
    query: string;
    result: couponModel.CouponInfo[];
}


export const SearchResult = () => {
    const location = useLocation();
    const state = location.state as LocationState;

    const [coupons, setCoupons] = useState<couponModel.CouponInfo[]>([]);

    const [sortOrder, setSortOrder] = useState(SortType.AlphabetAsc);

    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        setCoupons(sortCoupons(sortOrder, state.result));
    }, [location]);


    const {
        data,
        isLoading,
        hasNextPage,
        fetchNextPage
    } = couponModel.useSearchCouponsInfQuery(state.query);

    useEffect(() => {
        if (data) {
            const result = data.pages
                .map(x => x.results.map(n => couponModel.convertToCouponInfo(n)))
                .flat();
            setCoupons(result);
        }
    }, [data]);


    useEffect(() => {
        setCoupons(prev => sortCoupons(sortOrder, prev));
    }, [sortOrder]);

    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <div className={css.header}>
                    <h2 className={css.title}>Результаты поиска</h2>
                    {/* <select name="" id="" value={sortOrder} onChange={(e: any) => {
                        setSortOrder(Number(e.target.value));
                    }}>
                        <option value={SortType.AlphabetAsc}>По алфавиту</option>
                        <option value={SortType.PriceAsc}>{"По цене (низкая > высокая)"}</option>
                        <option value={SortType.PriceDesc}>{"По цене (высокая > низкая) "}</option>
                    </select> */}
                    <div className={css.sort}>
                        <p onClick={() => setIsOpened(true)}>Сортировать по: &nbsp;
                            {priceLabels[sortOrder]}</p>
                        <div style={isOpened ? {display: 'flex'} : {display: 'none'}} className={css.sortList}>
                            <h3 onClick={() => {
                                setIsOpened(false);
                            }}>Сортировать по:</h3>
                            <div onClick={() => {
                                setSortOrder(SortType.AlphabetAsc)
                                setIsOpened(false);
                            }}>
                                алфавиту
                            </div>

                            <div onClick={() => {
                                setSortOrder(SortType.PriceAsc)
                                setIsOpened(false);
                            }}
                            >
                                {'По цене (низкая > высокая)'}
                            </div>


                            <div onClick={() => {
                                setSortOrder(SortType.PriceDesc)
                                setIsOpened(false);
                            }}
                            >
                                {'По цене (высокая > низкая)'}
                            </div>
                        </div>
                    </div>

                </div>
                <CardsContainer
                    cards={coupons}
                    render={(x, i) => <CouponCard key={x.id} info={x}/>}
                />
            </div>
        </main>
    );
};


const getComparator = (sortType: SortType): Comparator<couponModel.CouponInfo> => {
    switch (sortType) {
        case SortType.PriceAsc:
            return (x, y) => x.productPrice - y.productPrice;
        case SortType.PriceDesc:
            return (x, y) => y.productPrice - x.productPrice;
        default:
            return (x, y) => x.title.localeCompare(y.title);
    }
};


const sortCoupons = (sortType: SortType, coupons: couponModel.CouponInfo[]): couponModel.CouponInfo[] => {
    const comparator = getComparator(sortType);
    return coupons.slice()
        .sort(comparator);
};
