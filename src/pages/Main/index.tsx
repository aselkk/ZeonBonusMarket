import cn from "classnames";
import {Categories} from "./Categories";
import {Coupons} from "./Coupons";
import {Slider} from "./Slider";
import {ImagesBlock} from "./ImagesBlock";

import css from "./style.module.scss";


export const Main = () => {
    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <Categories/>
                <Coupons/>
                <Slider/>
                <ImagesBlock/>
            </div>
        </main>
    );
};