import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/autoplay"
import "swiper/css/pagination";

import {axiosInstance, DTO} from "@/shared/api";
import css from "./styles.module.scss";


export const Slider = () => {
    const [slides, setSlides] = useState<DTO.SlideImage[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("info/image-slider");
                const data: DTO.SlideImage[] = response.data;
                setSlides(data);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);


    return (
        <div className={css.container}>
            <Swiper
                className={css.swiper}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: "." + css.bullets,
                    bulletClass: css.paginationBullet,
                    bulletActiveClass: css.paginationBulletActive,
                }}
                speed={1400}
                preventInteractionOnTransition={true}
            >
                {
                    slides.map((x: DTO.SlideImage, i: number) => {
                        return (
                            <SwiperSlide  className={css.swiperSlide} key={i}>
                                <img src={x.image} alt="slide"/>
                            </SwiperSlide>
                        );
                    })
                }

            </Swiper>
            <div className={css.bullets}></div>
        </div>
    );
};