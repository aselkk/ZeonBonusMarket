import React, {FC} from "react";
import { Carousel } from "./Carousel";
import { CouponDetails } from "./CouponDetails";
import { CouponItems } from "./CouponItems";
import css from "./styles.module.scss";
import {Data} from "./data"
import cn from 'classnames'



export const Coupon: FC = () => {
    return (
        <div className={cn("container", css.root)}>
            <div className={css.wrapper}>
                <div className={css.inner}>
                    <Carousel images={Data.images}/>
                </div>
                <CouponDetails />   
            </div>
            <CouponItems/>
        </div>
    );
};