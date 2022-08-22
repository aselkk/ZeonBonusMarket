import css from "./styles.module.scss";


interface PropType {
    imgSrc: string;
}


export const Slide = ({imgSrc}: PropType) => {
    return (
        <img className={css.root} src={imgSrc} alt="slide"/>
    );
};