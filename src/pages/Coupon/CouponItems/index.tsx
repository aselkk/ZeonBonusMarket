import {useState} from "react";

import {RadioButtons} from "@/shared/ui/RadioButtons";
import css from "./styles.module.scss";


interface PropType {
    description: string;
    condition: string;
}

const titles = ["Условия", "Описание", "Адреса"];

export const CouponItems = ({description, condition}: PropType) => {
    
    const [selectedTab, setSelectedTab] = useState<number>(0);
    
    const getContent = (): string => {
        switch (selectedTab) {
            case 0:
                return condition;
                break;
            case 1:
                return description;
                break;
            case 2:
                return condition.concat(description);
                break;
            default:
                return "";
        } 
    };

    return (
        <div className={css.root}>
            <div className={css.wrap}>
                <RadioButtons 
                    titles={titles}
                    selectedItem={selectedTab}
                    onSelectedItemChanged={setSelectedTab}
                />            
            </div>

            <div className={css.wrapContent} 
                dangerouslySetInnerHTML={{__html: getContent()}} >
            </div>
            
        </div>
    );
};