import { FC } from "react";
import css from "./styles.module.scss"

export const SliderMini: FC = () => {
    return (
        <div className={css.root}>
            <img className={css.img} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0DMjo_U0D6PNdLhhJxC0FhBt2Vw9kCU5fw&usqp=CAU"} alt="slide" />
            <img className={css.img} src={"data:image/jpeg;base64,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"} alt="slide" />
            <img className={css.img} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0DMjo_U0D6PNdLhhJxC0FhBt2Vw9kCU5fw&usqp=CAU"} alt="slide" />
             <img className={css.img} src={"data:image/jpeg;base64,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"} alt="slide" />
            <img className={css.img} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0DMjo_U0D6PNdLhhJxC0FhBt2Vw9kCU5fw&usqp=CAU"} alt="slide" />
        </div>
        );
};