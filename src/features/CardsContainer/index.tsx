import {ReactElement} from "react";
import css from "./styles.module.scss";


interface Props<T> {
    cards: T[];
    render: (item: T, index: number) => ReactElement;
}


export function CardsContainer<T>(props: Props<T>) {
    return (
        <div className={css.cards}>
            {
                props.cards.map((x: any, i: number) =>
                    props.render(x, i)
                )
            }
        </div>
    );
}