import {ReactElement} from "react";
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


interface Category {
    id: number,
    title: string,
    Icon: ReactElement,
}


export const Categories = () => {
    return (
        <ul className={css.groups}>
            {
                categories.map((x: Category) => (
                    <li key={x.id}>
                        {x.Icon}
                        <span className={css.label}>{x.title}</span>
                    </li>
                )
                )
            }
        </ul>
    );
};


const categories: Array<Category> = [
    {
        id: 1,
        title: "Все",
        Icon: <AllGroupsIcon  className={cn(css.icon, css.iconAllGroups)}/>
    },
    {
        id: 2,
        title: "Красота",
        Icon: <BeautyIcon className={cn(css.icon, css.iconBeauty)}/>
    },
    {
        id: 3,
        title: "Здоровье",
        Icon: <HealthIcon className={cn(css.icon, css.iconHealth)}/>
    },
    {
        id: 4,
        title: "Рестораны и кафе",
        Icon: <RestaurantsIcon className={cn(css.icon, css.iconRestaurants)}/>
    },
    {
        id: 5,
        title: "Развлечения",
        Icon: <EntertainmentIcon className={cn(css.icon, css.iconEntertainment)}/>
    },
    {
        id: 6,
        title: "Обучение",
        Icon: <EducationIcon className={cn(css.icon, css.iconEducation)}/>
    },
    {
        id: 7,
        title: "Авто",
        Icon: <AutoIcon className={cn(css.icon, css.iconAuto)}/>
    },
    {
        id: 8,
        title: "Фитнес",
        Icon: <FitnessIcon className={cn(css.icon, css.iconFitness)}/>
    },
    {
        id: 9,
        title: "Концерты",
        Icon: <ConcertsIcon className={cn(css.icon, css.iconConcerts)}/>
    },
    {
        id: 10,
        title: "Дети",
        Icon: <ChildrenIcon className={cn(css.icon, css.iconChildren)}/>
    },
    {
        id: 11,
        title: "Акции",
        Icon: <DiscountIcon className={cn(css.icon, css.iconDiscount)}/>
    }
];