import {useState} from "react";
import cn from "classnames";
import css from "./styles.module.scss";


export const Tags = () => {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <ul className={css.tags}>
            {
                tags.map(x =>
                    <li
                        key={x.id}
                        className={cn(css.item, {[css.itemActive]: x.id === selectedId})}
                        onClick={() => setSelectedId(x.id)}
                    >
                        {x.title}
                    </li>
                )
            }
        </ul>
    );
};


const tags = [
    {id: 1, title: "Для дома"},
    {id: 2, title: "Телефон"},
    {id: 3, title: "Гарнитура"},
    {id: 4, title: "Бытовые товары"},
    {id: 5, title: "Обувь"},
    {id: 6, title: "Одежда"},
    {id: 7, title: "Женское белье"},
    {id: 9, title: "Игра"},
    {id: 10, title: "Ноутбук"},
    {id: 11, title: "Автомобильные принадлежности"},
    {id: 12, title: "Товары для взрослых"},
    {id: 13, title: "Детская одежда"},
    {id: 14, title: "Продовольственные продукты"}
];