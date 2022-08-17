import {useState, useEffect} from "react";
import cn from "classnames";

import {Api} from "@/shared/api";
import {Accordion, AccordionItemType} from "@/shared/ui/Accordion";
import {MenuAboutUs} from "@/features/MenuMini";
import css from "./styles.module.scss";


export const Help = () => {
    const [questions, setQuestions] = useState<AccordionItemType[]>([]);

    useEffect(() => {
        (async () => {
            const faq = await Api.Info.getFaq();
            setQuestions(faq.map(x => ({title: x.question, text: x.answer})));
        })();
    }, []);

    return (
        <div className={css.help}>
            <div className={cn("container", css.container)}>
                <MenuAboutUs/>
                <Accordion items={questions}/>
            </div>
        </div>
    );
};
