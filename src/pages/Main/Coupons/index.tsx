import {useState, useEffect} from "react";
import _ from "lodash";

import {Api, DTO} from "@/shared/api";
import {CouponCard, CouponInfo, couponModel} from "@/entities/CouponCard";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import css from "./styles.module.scss";

import {useQuery} from "@tanstack/react-query";


export const Coupons = () => {
    const {data, isLoading, error} = couponModel.useTrendCouponsCall();

    const [coupons, setCoupons] = useState<CouponInfo[]>([]);

    // const {data, error, isLoading} = useGetTrendCouponsQuery(1);

    useEffect(() => {
        if (data) {

            const result: DTO.Coupon[] = data.results;
            const couponInfos = _.take(result, 8)
                .map((x: DTO.Coupon): CouponInfo => ({
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
                        onFavoriteToggle={() => {}}
                    />}
            />
            {/* TODO: линк на страницу все товары*/}
            <Button className={css.button} linkTo={"/trends"}>
                Посмотреть все
            </Button>
        </div>
    );
};