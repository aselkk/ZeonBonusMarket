import {useState, useEffect, useRef} from "react";
import cn from "classnames";
import css from "./styles.module.scss";


export interface AccordionItemType {
    title: string;
    text: string;
}

interface Props {
    data: AccordionItemType;
    isOpen: boolean;
    onClick?: () => void;
}


export const AccordionItem = ({data, isOpen, onClick}: Props) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen)
            setHeight(contentRef.current?.scrollHeight || 0);
        else
            setHeight(0);
    }, [isOpen]);


    return (
        <li className={cn(css.accordionItem, {[css.active]: isOpen})}>
            <button className={css.accordionItemBtn} onClick={onClick}>
                {data.title}
            </button>
            <div className={css.accordionItemContainer} style={{height}}>
                <div ref={contentRef} className={css.accordionItemContent}>
                    {data.text}
                </div>
            </div>
        </li>
    );
};
