import { FC } from "react";
import css from "./styles.module.scss"

type PropType = {
    addresses: {
        title: string,
        address: string[]
    }
}
export const Addresses: FC<PropType> = ({addresses}) => {
   
    return (
        <div className={css.root}>
            <h5 className={css.title}>{addresses.title}</h5>
            {addresses.address.map((item, index) => (
                <p key={index} className={css.address}>{item}</p>
            ))}
        </div>
    );
};