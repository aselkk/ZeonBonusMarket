import { FC } from "react";
import css from "./styles.module.scss"


type PropType = {
    imgSrc: string
}
export const Slide: FC<PropType> = (props) => {
    return (
        <img className={css.root} src={props.imgSrc} alt="slide" />
    );
};