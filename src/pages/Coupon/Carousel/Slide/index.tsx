import { FC } from "react";
import css from "./styles.module.scss"

export const Slide: FC = () => {
    return (
        <img className={css.root} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0DMjo_U0D6PNdLhhJxC0FhBt2Vw9kCU5fw&usqp=CAU"} alt="slide" />
    );
};