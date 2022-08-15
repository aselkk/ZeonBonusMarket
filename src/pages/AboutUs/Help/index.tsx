import React, {FC} from "react";
import {MenuAboutUs} from "../MenuMini";
import cn from "classnames";
import css from "./styles.module.scss";
import {Accordion} from "./Accordion";
import {axiosInstance} from "@/shared/api";



export const HelpPage: FC = () => {
    const [questions, setQuestions] = React.useState([]);
    const getFAQfromServer = () => {
        return axiosInstance.get("/info/faq/");
    };

    const getFAQfromServerAPI = async () => {
        const response = await getFAQfromServer();
        setQuestions(response.data);
    };
    React.useEffect(() => {
        getFAQfromServerAPI();
    }, []);

    return (
        <div className={css.aboutUs}>
            <div className={cn("container", css.container)}>
                <MenuAboutUs />
                <Accordion items={questions} />
            </div>
        </div>
    );
};
