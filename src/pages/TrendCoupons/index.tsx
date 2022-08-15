import {useState, useEffect} from "react";
import _ from "lodash";
import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {CouponCard, CouponInfo} from "@/entities/CouponCard";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import {Tags} from "./Tags";
import css from "./style.module.scss";


export const TrendCoupons = () => {
    const [page, setPage] = useState(1);
    const [coupons, setCoupons] = useState<CouponInfo[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("coupons/trends?page=1");
                const result: DTO.Coupon[] = response.data.results;
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
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);


    const onLoadMoreClick = () => {
        setPage(prev => prev + 1);
        console.log(page);
    };


    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <h2 className={css.title}>Новые купоны</h2>
                <Tags/>
                <CardsContainer
                    cards={coupons}
                    render={(x, i) => <CouponCard key={x.id} info={x}/>}
                />
                <Button className={css.button} onClick={onLoadMoreClick}>
                    Загрузить еще
                </Button>
            </div>
        </main>
    );
};