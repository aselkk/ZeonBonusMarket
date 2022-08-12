import { FC } from "react";
import css from "./styles.module.scss";
import { ReactComponent as Ticket} from "@/assets/icons/ticket.svg";
import { ReactComponent as Clock} from "@/assets/icons/clock.svg";  
import { SocialMedia } from "./SocialMedia";



type PropType = {
    info: {
        validity: {
            begin: string,
            end: string
        },
        saledCoupons: number
    }
}

export const CouponInfo: FC<PropType> = (props) => {
    const saled = props.info.saledCoupons
    return (
        <div className={css.root}>
            <div className={css.top}>
                <span className={css.span}>{"Период действия акции:"}</span><br/>
                <span className={css.begin}>{`с ${props.info.validity.begin}`}</span>
                <span className={css.end}>{`по ${props.info.validity.end}`}</span>
            </div>
            <div className={css.middle}>
                <div className={css.wrap}>
                    <Ticket/> 
                    <span className={css.span}>{`${saled} купонов купили`}</span>
                </div>
                <div className={css.wrap}>
                    <Clock/> 
                    <span className={css.span}>{"Время продаж ограничено!"}</span>
                </div>
            </div>
            <div className={css.bottom}>
                <SocialMedia/>
            </div>
        </div>
    );
};