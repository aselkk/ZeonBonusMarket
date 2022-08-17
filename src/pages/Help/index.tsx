import {useState, useEffect} from "react";
import cn from "classnames";

import {Api} from "@/shared/api";
import {MenuAboutUs} from "@/features/MenuMini";
import {Accordion, AccordionItemType} from "@/shared/ui/Accordion";

import css from "./styles.module.scss";


export const Help = () => {
    const [questions, setQuestions] = useState<AccordionItemType[]>([]);

    useEffect(() => {
        Api.Info.getFaq()
            .then(data => setQuestions(data.map(x => ({title: x.question, text: x.answer}))));
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
