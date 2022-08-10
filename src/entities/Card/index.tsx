import React, {FC} from "react";
import css from "./style.module.scss";
import cn from "classnames";


import png from "@/assets/images/mini-coupons/coupon_1.png";
import logo from "@/assets/images/mini-logos/colbasoff.png";


import {ReactComponent as HotDiscountLogo} from "@/assets/icons/hot-discount.svg";
import {ReactComponent as DollarsLogo} from "@/assets/icons/dollars.svg";
import {ReactComponent as HeartLogo} from "@/assets/icons/heart.svg";

const info = {
    partnerTitle: "Колбасофф",
    description: "Блюда в четырех ресторанах «Чайхана №1» за полцены",
    price: 9999,
    discount: 50,
    productPrice: 1600,
    isFavorite: false
}


export const Card: FC = () => {
    const productPriceWithoutDiscount = Math.round(info.price - (info.price * info.discount / 100));


    const onBtnFavoriteClick = () => {
        console.log("Favorite");
    };

    return (
        <main className={css.card}>
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
            <img src={png} alt="preview"/>
            <div className={css.info}>
                <div className={css.partner}>
                    <img className={css.logo} src={logo} alt="partner-logo"/>
                    <p className={css.title}>
                        {info.partnerTitle}
                    </p>
                </div>
                <p className={css.description}>
                    {info.description}
                </p>
                <div className={css.pricePane}>
                    <HotDiscountLogo className={css.icon}/>
                    <div>
                        <p className={css.pricePaneTitle}>
                            Цена скидки с купоном:
                        </p>
                        <p className={css.pricePanePrice}>
                            {productPriceWithoutDiscount} c
                            <span className={css.pricePaneOldPrice}>{info.productPrice} с</span>
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
                            {info.price.toLocaleString("ru")} cом
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};


