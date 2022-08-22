import css from "./styles.module.scss";
import {ReactComponent as Ticket} from "@/assets/icons/ticket.svg";
import {ReactComponent as Clock} from "@/assets/icons/clock.svg";  
import {SocialMedia} from "./SocialMedia";



interface PropType {
    begin?: string;
    end?: string;
    saled?: number;
}

export const CouponInfo = (props: PropType) => {

    const addDotsForData = (data: string = "") => data.split("-").join("."); 

    return (
        <div className={css.root}>
            <div className={css.top}>
                <span className={css.span}>{"Период действия акции:"}</span><br/>
                <span className={css.begin}>{`с ${addDotsForData(props.begin)}`}</span>
                <span className={css.end}>{`по ${addDotsForData(props.end)}`}</span>
            </div>
            <div className={css.middle}>
                <div className={css.wrap}>
                    <Ticket/> 
                    <span className={css.span}>{`${props.saled} купонов купили`}</span>
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