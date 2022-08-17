import React from "react";
import css from "./styles.module.scss";
import cn from "classnames";
import {axiosInstance} from "@/shared/api";


export const PrivacyPolicy = () => {
    const [content, setContent] = React.useState(Object);
    const getPrivacyPolicyfromServer = () => {
        return axiosInstance.get("/info/privacy-policy/");
    };

    const getPrivacyPolicyfromServerAPI = async () => {
        const response = await getPrivacyPolicyfromServer();
        setContent(response.data);
    };
    React.useEffect(() => {
        getPrivacyPolicyfromServerAPI();
    }, []);
    console.log(content);
    
    return (
        <div className={css.privacyPolicy}>
            <div className={cn("container", css.container)}>
                <div className={css.content}>
                    <h3>{content.title}</h3>
                    <div className={css.text}>
                        {content.description}
                    </div>
                </div>
            </div>
        </div>
    );
};
