import cn from "classnames";
import React from "react";

import css from "./styles.module.scss";
import {MenuCoupons} from "@/features/MenuMiniCoupons";
import {RadioButtons} from "@/shared/ui/RadioButtons";

interface PropType {
    description: string;
    condition: string;
}


export const MyCoupons = () => {
    const titles = ["Активные", "Активированные", "Истекшие"];


    const [selectedTab, setSelectedTab] = React.useState<number>(0);

    return (
        <div className={css.contacts}>
            <div className={cn("container", css.container)}>
                <MenuCoupons/>
                <div className={css.content}>
                    <h3 className={css.title}>Мои купоны</h3>
                    <div className={css.wrap}>
                        <RadioButtons
                            titles={titles}
                            selectedItem={selectedTab}
                            onSelectedItemChanged={setSelectedTab}
                        />
                    </div>
                    <div className={css.text}>
                        <p>Нет купонов</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
