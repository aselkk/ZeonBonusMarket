import {Carousel} from "./Carousel";
import {CouponDetails} from "./CouponDetails";
import {CouponItems} from "./CouponItems";
import {CouponInfo} from "./CouponItems/CouponInfo";
import css from "./styles.module.scss";
import {Data} from "./data";
import cn from "classnames";


export const Coupon = () => {
    return (
        <div className={cn("container", css.root)}>
            <div className={css.slider}>
                <Carousel images={Data.images}/>
            </div>
            <div className={css.details}>
                <CouponDetails />
                <CouponInfo info={Data.info}/>   
            </div>
            <div className={css.items}>
                <CouponItems/>
            </div>
        </div>
    );
};