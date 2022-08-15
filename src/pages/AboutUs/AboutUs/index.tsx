import React, {FC} from "react";
import css from "./styles.module.scss";
import cn from "classnames";
import {MenuAboutUs} from "../MenuMini";
import {axiosInstance} from "@/shared/api";


export const AboutUs: FC = () => {
    const [content, setContent] = React.useState("");

    // TODO: have to move other file
    const getAboutUsfromServer = () => {
        return axiosInstance.get("/info/about-us/");
    };

    const getAboutUsfromServerAPI = async () => {
        const response = await getAboutUsfromServer();
        setContent(response.data.description);
    };

    React.useEffect(() => {
        getAboutUsfromServerAPI();
    }, [content]);

    return (
        <div className={css.aboutUs}>
            <div className={cn("container", css.container)}>
                <MenuAboutUs />
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
