import {useState, useEffect} from "react";
import _ from "lodash";

import {axiosInstance, DTO} from "@/shared/api";
import {CouponCard, CouponInfo} from "@/entities/CouponCard";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import css from "./styles.module.scss";


export const Coupons = () => {
    const [coupons, setCoupons] = useState<CouponInfo[]>([]);

    useEffect(() => {
        (async () => {
            try {
                // TODO: back: пагинация (по нормальному должна быть реализована через limit & offset)
                //  * надо передавать номер страницы, а сколько итемов в странице неизвестно
                //  * если вдруг результат пустой, то сервер возвращает 404 ошибку вместо пустого результата
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
            } catch
            (err) {
                console.error(err);
            }
        }
        )();
    }, []);


    return (
        <div className={css.wrap}>
            <h2 className={css.title}>Новые купоны</h2>
            <CardsContainer
                cards={coupons}
                render={(x, i) => <CouponCard key={x.id} info={x}/>}
            />
            {/* TODO: линк на страницу все товары*/}
            <Button className={css.button} linkTo={"/trends"}>
                Посмотреть все
            </Button>
        </div>
    );
};