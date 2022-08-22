import cn from "classnames";
import css from "./styles.module.scss";


interface Props {
    titles: string[];
    selectedItem: number;
    onSelectedItemChanged: (item: number) => void;
}


export const RadioButtons = ({titles, selectedItem, onSelectedItemChanged}: Props) => {
    return (
        <div className={css.root}>
            {
                titles.map((title, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectedItemChanged(index)}
                        className={cn(css.button, {
                            [css.active]: selectedItem === index
                        })}
                    >
                        {title}
                    </button>
                ))
            }
        </div>
    );
};