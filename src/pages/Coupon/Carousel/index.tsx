import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {FreeMode, Navigation, Thumbs} from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./mySlider.scss";
import cn from "classnames";
import css from "./styles.module.scss";
import {Slide} from "./Slide";


interface PropType {
    images?: [
        { id: number; image: string }
    ]; 
}

export const Carousel = ({images}: PropType) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className={css.root}>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                onSlideChange={e =>  setActiveIndex(e.activeIndex)}               
            >
                {  
                    images?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}><Slide imgSrc={item.image} /></SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <Swiper
                onSwiper={e => {
                    setTimeout(() => {
                        setThumbsSwiper(e);
                    }, 0);
                }}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={css.miniSlider}
                breakpoints={{
                    320: {
                        slidesPerView: 2.5
                    },
                    576: {
                        slidesPerView: 4.5
                    },
                    768: {
                        slidesPerView: 5
                    },
                    992: {
                        slidesPerView: 5
                    },
                    1200: {
                        slidesPerView: 6.5
                    }
                }}
            >
                {  
                    images?.map((item, index) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <img className={activeIndex===index ? cn(css.sketch, css.active): css.sketch} src={item.image} alt="image" />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};