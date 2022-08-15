import {RefObject, useEffect, useRef, useState} from "react";
import css from "./styles.module.scss";


type AccordionData = {
  question: string;
  answer: any;
};

function getRefValue<C>(ref: RefObject<C>) {
    return ref.current as C;
}

export function AccordionItem({
    data,
    isOpen,
    btnOnClick
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            const contentEl = getRefValue(contentRef);

            setHeight(contentEl.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <li className={`${css.accordionItem} ${isOpen ? css.active : ""}`}>
            <button className={css.accordionItemBtn} onClick={btnOnClick}>
                {data.question}
            </button>
            <div className={css.accordionItemContainer} style={{height}}>
                <div ref={contentRef} className={css.accordionItemContent}>
                    {data.answer}
                </div>
            </div>
        </li>
    );
}
