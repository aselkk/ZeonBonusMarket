import React, {FC} from "react";
import css from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation"

import { Navigation } from 'swiper'


export const Carousel: FC = () => {
    return (
        <div className={css.root}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                observer={true}
            >
                <SwiperSlide>slide1</SwiperSlide>
                <SwiperSlide>slide2</SwiperSlide>
                <SwiperSlide>slide3</SwiperSlide>
            </Swiper>
        </div>
    );
};