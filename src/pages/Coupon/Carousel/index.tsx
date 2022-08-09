import React, {FC} from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper'
import "swiper/css/navigation"
import "swiper/css";
import { Slide } from "./Slide";
import "./mySlider.scss"

import css from "./styles.module.scss";


export const Carousel: FC = () => {
    return (
        <div className={css.root}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                observer={true}
            >
                <SwiperSlide><Slide/></SwiperSlide>
                <SwiperSlide><Slide/></SwiperSlide>
                <SwiperSlide><Slide/></SwiperSlide>
            </Swiper>
        </div>
    );
};