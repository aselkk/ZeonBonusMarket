import {useState} from "react";

import {RadioButtons} from "@/shared/ui/RadioButtons";
import {Terms} from "./Terms";
import {Data} from "./data";
import {Addresses} from "./Addresses";
import {Description} from "./Description";
import css from "./styles.module.scss";



const titles = ["Условия", "Описание", "Адреса"];

export const CouponItems = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <div className={css.root}>
            <div className={css.wrap}>
                <RadioButtons 
                    titles={titles}
                    selectedItem={selectedTab}
                    onSelectedItemChanged={setSelectedTab}
                />            
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
    );
};