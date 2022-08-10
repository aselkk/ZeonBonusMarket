import { FC } from "react";
import css from "./styles.module.scss"

type PropType = {
    description: string[]
}
export const Description: FC<PropType> = ({description}) => {
   
    return (
        <div className={css.root}>
              {description.map((item, index) => (
                <p key={index} className={css.desc}>{item}</p>
            ))}
        </div>
    );
};