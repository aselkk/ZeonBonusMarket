import css from "./styles.module.scss";


interface Props {
    onClick?: () => void;
}


export const BurgerButton = ({onClick}: Props) => {
    return (
        <button
            className={css.button}
            onClick={onClick}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};