import css from "./styles.module.scss";


interface PropType {
    imgSrc: string
}


export const Slide = (props: PropType) => {
    return (
        <img className={css.root} src={props.imgSrc} alt="slide"/>
    );
};