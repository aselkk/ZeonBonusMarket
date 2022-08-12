import React, {FC, useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";
import "./mySlider.scss"
import cn from "classnames";
import css from "./styles.module.scss";
import { Slide } from "./Slide";



type PropType = {
    images: Array<string>
};

export const Carousel: FC<PropType> = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    //const [thumbsSwiper, setThumbsSwiper]:[null | NodeJS.Timeout, (interval: null | NodeJS.Timeout) => void] = useState<null | NodeJS.Timeout>(null);

    //const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    
    return (
        <div className={css.root}>
             <Swiper
                // style={{
                // "--swiper-navigation-color": "#fff",
                // "--swiper-pagination-color": "#fff",
                // }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {  
                    props.images.map((x: any, i: any) => {
                        return (
                            <SwiperSlide key={i}><Slide imgSrc={x} /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Swiper
                // onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                  {  
                    props.images.map((item: string, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <img className={css.sketch} src={item} alt="image" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            {/* <Swiper
                navigation={true}
                modules={[Navigation]}
                observer={true}
                onSlideChange={(e: any) => {
                setActiveSlideIndex(e.activeIndex)
                }}
            >  
                {  
                    props.images.map((x: any, i: any) => {
                        return (
                            <SwiperSlide key={i}><Slide imgSrc={x} />{i}</SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className={css.miniSlider}>
                {
                    props.images.map((item: string, index: number) => {
                        if (index === activeSlideIndex) 
                           return <img 
                                        key={index}
                                        className={cn(css.slide, css.slideActive)} 
                                        src={item} 
                                        alt={"slide"}
                                    />      
                        return (
                           <img 
                                onClick={() => setActiveSlideIndex(index)}
                                key={index}
                                className={css.slide} 
                                src={item} 
                                alt={"slide"}
                            />      
                        )
                    })
                }
            </div> */}
        </div>
    );
};