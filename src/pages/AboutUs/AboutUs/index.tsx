import React from "react";
import cn from "classnames";

import {Api} from "@/shared/api";
import {MenuAboutUs} from "@/features/MenuMini";
import css from "./styles.module.scss";


export const AboutUs = () => {
    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        (async () => {
            const description = await Api.Info.getDescriptionAboutUs();
            setContent(description);
        })();
    }, [content]);


    return (
        <div className={css.aboutUs}>
            <div className={cn("container", css.container)}>
                <MenuAboutUs/>
                <div className={css.content}>
                    <h3>О нас</h3>
                    <div className={css.text}>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
