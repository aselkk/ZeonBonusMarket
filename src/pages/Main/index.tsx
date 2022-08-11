import React, {FC} from "react";
import css from "./style.module.scss";
import cn from "classnames";

import {Groups} from "./Groups";
import {Card} from "@/entities/Card";
import {Button} from "@/shared/ui/Button";


const info = {
    partnerTitle: "Колбасофф",
    description: "Блюда в четырех ресторанах «Чайхана №1» за полцены",
    price: 9999,
    discount: 50,
    productPrice: 1600,
    isFavorite: false
}


export const Main: FC = () => {
    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <Groups/>
                <div className={css.cards}>
                    <Card info={info}/>
                    <Card info={info}/>
                    <Card info={info}/>
                    <Card info={info}/>
                    <Card info={info}/>
                    <Card info={info}/>
                    <Card info={info}/>
                    <Card info={info}/>
                </div>
                {/* TODO: линк на страницу все товары*/}
                <Button className={css.button} linkTo={"/"}>
                    Посмотреть все
                </Button>
            </div>
        </main>
    );
};


