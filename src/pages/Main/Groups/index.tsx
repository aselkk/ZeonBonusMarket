import React, {FC} from "react";
import cn from "classnames";
import css from "./style.module.scss";

import {ReactComponent as AllGroupsIcon} from "@/assets/icons/groups/circle-all.svg";
import {ReactComponent as BeautyIcon} from "@/assets/icons/groups/circle-hairdressing.svg";
import {ReactComponent as HealthIcon} from "@/assets/icons/groups/circle-health.svg";
import {ReactComponent as RestaurantsIcon} from "@/assets/icons/groups/circle-restaurants.svg";
import {ReactComponent as EntertainmentIcon} from "@/assets/icons/groups/circle-entertainment.svg";
import {ReactComponent as EducationIcon} from "@/assets/icons/groups/circle-education.svg";
import {ReactComponent as AutoIcon} from "@/assets/icons/groups/circle-auto.svg";
import {ReactComponent as FitnessIcon} from "@/assets/icons/groups/circle-fitness.svg";
import {ReactComponent as ConcertsIcon} from "@/assets/icons/groups/circle-concerts.svg";
import {ReactComponent as ChildrenIcon} from "@/assets/icons/groups/circle-children.svg";
import {ReactComponent as DiscountIcon} from "@/assets/icons/groups/circle-discount.svg";


export const Groups: FC = () => {
    return (
        <ul className={css.groups}>
            <li>
                <AllGroupsIcon className={cn(css.icon, css.iconAllGroups)}/>
                <span className={css.label}>Все</span>
            </li>
            <li>
                <BeautyIcon className={cn(css.icon, css.iconBeauty)}/>
                <span className={css.label}>Красота</span>
            </li>
            <li>
                <HealthIcon className={cn(css.icon, css.iconHealth)}/>
                <span className={css.label}>Здоровье</span>
            </li>
            <li>
                <RestaurantsIcon className={cn(css.icon, css.iconRestaurants)}/>
                <span className={css.label}>Рестораны и кафе</span>
            </li>
            <li>
                <EntertainmentIcon className={cn(css.icon, css.iconEntertainment)}/>
                <span className={css.label}>Развлечения</span>
            </li>
            <li>
                <EducationIcon className={cn(css.icon, css.iconEducation)}/>
                <span className={css.label}>Обучение</span>
            </li>
            <li>
                <AutoIcon className={cn(css.icon, css.iconAuto)}/>
                <span className={css.label}>Авто</span>
            </li>
            <li>
                <FitnessIcon className={cn(css.icon, css.iconFitness)}/>
                <span className={css.label}>Фитнес</span>
            </li>
            <li>
                <ConcertsIcon className={cn(css.icon, css.iconConcerts)}/>
                <span className={css.label}>Концерты</span>
            </li>
            <li>
                <ChildrenIcon className={cn(css.icon, css.iconChildren)}/>
                <span className={css.label}>Дети</span>
            </li>
            <li>
                <DiscountIcon className={cn(css.icon, css.iconDiscount)}/>
                <span className={css.label}>Акции</span>
            </li>
        </ul>
    );
};