import React, {FC} from "react";
import css from "./styles.module.scss";
import {Data} from "../data";


export const CouponDetails: FC = () => {
    return (
        <div className={css.root}>
            <div className={css.logoWrapper}>
                <img className={css.logo} src={Data.logoUrl} alt="logo" />
                <h3 className={css.logoTitle}>{Data.name}</h3>
            </div>
            <p className={css.sale}>Купон на скидку {Data.sale}%</p>
            <p className={css.saleDesc}>{Data.description}</p>
            <div className={css.priceWrap}>
                <span className={css.priceTitle}>Цена за купон:</span>
                <span className={css.priceInner}>
                    <span className={css.priceNew}>от 150 сом</span>
                </span>
            </div>
            <div className={css.priceWrap}>
                <span className={css.priceTitle}>Цена c купоном:</span> 
                <span className={css.priceInner}>
                    <span className={css.priceNew}>1500 сом</span>
                    <span className={css.priceOld}>3000 сом</span>
                </span>
            </div>
        </div>
    );
};