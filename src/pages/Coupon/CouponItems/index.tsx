import { FC } from "react";
import css from "./styles.module.scss"
import { RadioButtons } from "./RadioButtons";
import { Terms } from "./Terms";
import { Data } from "./data";
import { Addresses } from "./Addresses";
import { Description } from "./Description";


export const CouponItems: FC = () => {
   
    return (
        <div className={css.root}>
            <div className={css.left}>
                <div className={css.wrap}>
                    <RadioButtons/>            
                </div>
                <div className={css.wrapTerm}>
                    <Terms terms={Data.terms}/>
                </div>
                <div className={css.wrapAddr}>
                    <Addresses addresses={Data.addresses}/>
                </div>
                <div className={css.wrapDesc}>
                    <Description description={Data.description}/>
                </div>
            </div>
        </div>
    );
};