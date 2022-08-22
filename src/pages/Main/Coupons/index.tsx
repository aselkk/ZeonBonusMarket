import {useState, useEffect} from "react";
import _ from "lodash";

import {DTO} from "@/shared/api";
import {CouponCard, couponModel} from "@/entities/coupon";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import css from "./styles.module.scss";


export const Coupons = () => {
    const {data, isLoading} = couponModel.useTrendCouponsCall(1);

    const [coupons, setCoupons] = useState<couponModel.CouponInfo[]>([]);


    useEffect(() => {
        if (data) {
            const result: DTO.Coupon[] = data.results;
            const couponInfos = _.take(result, 8)
                .map((x: DTO.Coupon) => couponModel.convertToCouponInfo(x));
            setCoupons(couponInfos);
        }
    }, [data]);

    if (isLoading)
        return <h2>Loading</h2>;


    return (
        <div className={css.wrap}>
            <h2 className={css.title}>Новые купоны</h2>
            <CardsContainer
                cards={coupons}
                render={(x, i) =>
                    <CouponCard
                        key={x.id}
                        info={x}
                        onFavoriteToggle={() => {
                        }}
                    />}
            />
            {/* TODO: линк на страницу все товары*/}
            <Button className={css.button} linkTo={"/trends"}>
                Посмотреть все
            </Button>
        </div>
    );
};