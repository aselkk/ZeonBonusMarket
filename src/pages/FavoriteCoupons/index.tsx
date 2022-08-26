import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroller";
import cn from "classnames";

import {CouponCard, couponModel} from "@/entities/coupon";
import {CardsContainer} from "@/features/CardsContainer";

import css from "./styles.module.scss";


const enum SortType {
    AlphabetAsc,
    PriceAsc,
    PriceDesc
}


export const FavoriteCoupons = () => {
    const [coupons, setCoupons] = useState<couponModel.CouponInfo[]>([]);
    const [sortOrder, setSortOrder] = useState(SortType.AlphabetAsc);

    const {
        data,
        isLoading,
        hasNextPage,
        fetchNextPage
    } = couponModel.useFavoriteCouponsInfQuery(1);

    useEffect(() => {
        if (!data?.pages[0]?.results?.length && !isLoading)
            void fetchNextPage();
    }, [isLoading, hasNextPage])

    useEffect(() => {
        if (data) {
            const result = data?.pages
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
                    <h2 className={css.title}>
                        Избранное
                    </h2>
                    <select name="" id="" value={sortOrder} onChange={(e: any) => {
                        setSortOrder(Number(e.target.value));
                    }}>
                        <option value={SortType.AlphabetAsc}>По алфавиту</option>
                        <option value={SortType.PriceAsc}>{"По цене (низкая > высокая)"}</option>
                        <option value={SortType.PriceDesc}>{"По цене (высокая > низкая) "}</option>
                    </select>

                </div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() =>  fetchNextPage()}
                    initialLoad={false}
                    hasMore={true}
                >
                    <CardsContainer
                        cards={coupons}
                        render={(x, i) => <CouponCard key={x.id} info={x}/>}
                    />
                </InfiniteScroll>
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
