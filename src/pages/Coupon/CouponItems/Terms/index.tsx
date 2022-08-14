import { FC } from "react";
import css from "./styles.module.scss"

type PropType = {
    terms: {
        title: string,
        description: Array<string>
    }
}

    export const Terms: FC<PropType> = ({terms}) => {
    
    return (
        <div className={css.root}>
            <h5 className={css.title}>{terms.title}</h5>
            {terms.description.map((item, index) => (
                <p key={index} className={css.desc}>{item}</p>
            ))}
        </div>
    );
};