import React, {FC} from "react";
import { Carousel } from "./Carousel";
import { CouponDetails } from "./CouponDetails";
import css from "./styles.module.scss";
import {Data} from "./data"



export const Coupon: FC = () => {
    return (
        <div className={css.root}>
            Coupon
            <div className={css.carouselBlock}>
                <Carousel/> 
                <CouponDetails />      
            </div>
        </div>
    );
};