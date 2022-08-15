import {useEffect, useState} from "react";
import {axiosInstance} from "@/shared/api";

import css from "./styles.module.scss";


type Image = {image: string};


export const ImagesBlock = () => {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("info/image-block");
                const data: Image[] = response.data;
                setImages(data);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);


    return (
        <div className={css.container}>
            {
                images.map((x: Image, i: number) =>
                    <img key={i} src={x.image} alt="image"/>
                )
            }
        </div>
    );
};