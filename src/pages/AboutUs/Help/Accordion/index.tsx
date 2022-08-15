import {useState} from "react";
import {AccordionItem} from "./AccordionItems";
import css from "./styles.module.scss";


type AccordionData = {
  question: string;
  answer: any;
};

export function Accordion({items}: { items: Array<AccordionData> }) {
    const [currentIdx, setCurrentIdx] = useState(-1);
    const btnOnClick = (idx: number) => {
        setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
    };

    return (
        <ul className={css.accordion}>
            <h2>Помощь</h2>
            {items.map((item, idx) => (
                <AccordionItem
                    key={idx}
                    data={item}
                    isOpen={idx === currentIdx}
                    btnOnClick={() => btnOnClick(idx)}
                />
            ))}
        </ul>
    );
}
