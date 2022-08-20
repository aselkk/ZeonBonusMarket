import {useState, useEffect} from "react";
import cn from "classnames";

import {Api} from "@/shared/api";
import {MenuAboutUs} from "@/features/MenuMini";
import css from "./styles.module.scss";


export const AboutUs = () => {
    const [description, setDescription] = useState("");

    useEffect(() => {
        Api.Info.getDescriptionAboutUs().then((data) => setDescription(data));
    }, [Api]);

    return (
        <div className={css.aboutUs}>
            <div className={cn("container", css.container)}>
                <MenuAboutUs />
                <div className={css.content}>
                    <h3 className={css.title}>О нас</h3>
                    <div className={css.text}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
