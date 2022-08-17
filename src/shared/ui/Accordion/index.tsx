import {useState} from "react";
import {AccordionItem, AccordionItemType} from "./AccordionItem";
import css from "./styles.module.scss";


export type {AccordionItemType};


export const Accordion = ({items}: { items: AccordionItemType[] }) => {
    const [currentIdx, setCurrentIdx] = useState(-1);

    const onItemClick = (idx: number) => {
        setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
    };

    return (
        <ul className={css.accordion}>
            <h2 className={css.title}>Помощь</h2>
            {
                items.map((item, idx) => (
                    <AccordionItem
                        key={idx}
                        data={item}
                        isOpen={idx === currentIdx}
                        onClick={() => onItemClick(idx)}
                    />
                ))
            }
        </ul>
    );
};
