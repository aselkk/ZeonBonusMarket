import cn from "classnames";
import {DTO} from "@/shared/api";
import css from "./styles.module.scss";


interface Props {
    tags: DTO.Tag[];
    selectedItem?: DTO.Tag;
    onSelectedItem: (item: DTO.Tag) => void;
}

export const Tags = (props: Props) => {

    return (
        <ul className={css.tags}>
            {
                props.tags.map(x =>
                    <li
                        key={x.id}
                        className={cn(css.item, {[css.itemActive]: x.id === props.selectedItem?.id})}
                        onClick={() => props.onSelectedItem(x)}
                    >
                        {x.title}
                    </li>
                )
            }
        </ul>
    );
};