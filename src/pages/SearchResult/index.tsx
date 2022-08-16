import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import cn from "classnames";

import {DTO} from "@/shared/api";
import {CouponCard, CouponInfo} from "@/entities/CouponCard";
import {CardsContainer} from "@/features/CardsContainer";

import css from "./styles.module.scss";


const enum SortType {
    AlphabetAsc,
    PriceAsc,
    PriceDesc
}

interface LocationState {
    query: string,
    result: DTO.Coupon[]
}


export const SearchResult = () => {
    const location = useLocation();
    const state = location.state as LocationState;

    const [coupons, setCoupons] = useState<CouponInfo[]>([]);
    
    const [sortOrder, setSortOrder] = useState(SortType.AlphabetAsc);

    useEffect(() => {
        const resultCoupons = state.result.map((x: DTO.Coupon): CouponInfo => ({
            id: x.id,
            title: x.title,
            previewImage: x.preview_image,
            companyName: x.company_name,
            companyLogo: x.company_logo,
            isFavorite: x.is_favorite,
            couponPrice: Number(x.price_for_coupon),
            productPrice: Number(x.price),
            discount: x.discount_percent
        }));


        setCoupons(sortCoupons(sortOrder, resultCoupons));
    }, [location]);



    useEffect(() => {
        setCoupons(prev => sortCoupons(sortOrder, prev));
    }, [sortOrder]);

    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <div className={css.header}>
                    <h2 className={css.title}>Результаты поиска</h2>
                    <select name="" id="" value={sortOrder} onChange={(e: any) => {
                        setSortOrder(Number(e.target.value));
                    }}>
                        <option value={SortType.AlphabetAsc}>По алфавиту</option>
                        <option value={SortType.PriceAsc}>{"По цене (низкая > высокая)"}</option>
                        <option value={SortType.PriceDesc}>{"По цене (высокая > низкая) "}</option>
                    </select>
                    
                </div>
                <CardsContainer
                    cards={coupons}
                    render={(x, i) => <CouponCard key={x.id} info={x}/>}
                />
            </div>
        </main>
    );
};


const getComparator = (sortType: SortType): Comparator<CouponInfo> => {
    switch (sortType) {
        case SortType.PriceAsc:
            return (x, y) => x.productPrice - y.productPrice;
        case SortType.PriceDesc:
            return (x, y) => y.productPrice - x.productPrice;
        default:
            return (x, y) => x.title.localeCompare(y.title);
    }
};


const sortCoupons = (sortType: SortType, coupons: CouponInfo[]): CouponInfo[] => {
    const comparator = getComparator(sortType);
    return coupons.slice()
        .sort(comparator);
};
