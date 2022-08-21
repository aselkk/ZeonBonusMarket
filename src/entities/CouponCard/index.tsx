import React from "react";
import {useNavigate} from "react-router-dom";
import cn from "classnames";
import {useToggleFav, CouponInfo} from "./model";

import css from "./style.module.scss";

import {ReactComponent as HotDiscountLogo} from "@/assets/icons/hot-discount.svg";
import {ReactComponent as DollarsLogo} from "@/assets/icons/dollars.svg";
import {ReactComponent as HeartLogo} from "@/assets/icons/heart.svg";
import emptyPreviewImage from "@/assets/images/empty-coupon-preview.jpg";
import emptyCompanyLogo from "@/assets/images/empty-company-mini-logo.png";



interface Props {
    info: CouponInfo,
    onFavoriteToggle?: () => void
}


export const CouponCard = ({info, onFavoriteToggle}: Props) => {
    const navigate = useNavigate();

    const {mutate} = useToggleFav();

    const onBtnFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        console.log("Favorite", info.id);
        onFavoriteToggle?.();
        mutate({id: info.id, isFavorite: !info.isFavorite});
    };

    const onCardClick = () => {
        navigate(`/coupon/${info.id}`);
    };

    const productPriceWithoutDiscount = Math.round(info.productPrice - (info.productPrice * info.discount / 100));


    return (
        <div className={css.card} onClick={onCardClick}>
            <div className={css.discountBadge}>
                {info.discount} %
            </div>
            <button className={css.btnFavorite} onClick={onBtnFavoriteClick}>
                <HeartLogo
                    className={cn(css.btnFavoriteIcon, {
                        [css.btnFavoriteIconActive]: info.isFavorite
                    })}
                />
            </button>
            <img
                className={css.previewImage}
                src={info.previewImage || emptyPreviewImage}
                alt="preview"
            />
            <div className={css.info}>
                <div className={css.company}>
                    <img
                        className={css.logo}
                        src={info.companyLogo || emptyCompanyLogo}
                        alt="partner-logo"
                    />
                    <p className={css.companyTitle}>
                        {info.companyName}
                    </p>
                </div>
                <p className={css.title}>
                    {info.title}
                </p>
                <div className={css.pricePane}>
                    <HotDiscountLogo className={css.icon}/>
                    <div>
                        <p className={css.pricePaneTitle}>
                            Цена скидки с купоном:
                        </p>
                        <p className={css.pricePanePrice}>
                            {productPriceWithoutDiscount.toLocaleString("ru")} c
                            <span className={css.pricePaneOldPrice}>
                                {info.productPrice.toLocaleString("ru")} с
                            </span>
                        </p>
                    </div>
                </div>
                <div className={css.pricePane}>
                    <DollarsLogo className={css.icon}/>
                    <div>
                        <p className={css.pricePaneTitle}>
                            Цена за купон:
                        </p>
                        <p className={css.pricePanePrice}>
                            {info.couponPrice.toLocaleString("ru")} cом
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export * as couponModel from "./model";