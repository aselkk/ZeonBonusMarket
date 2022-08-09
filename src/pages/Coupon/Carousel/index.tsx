import React, {FC} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation } from 'swiper'
import "swiper/css/navigation"
import "swiper/css";
import { Slide } from "./Slide";
import "./mySlider.scss"
import cn from "classnames";
import css from "./styles.module.scss";



type PropType = {
    images: Array<string>
};

export const Carousel: FC<PropType> = (props) => {

    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    // const [swiper, setSwiper] = React.useState(null);
    
    return (
        <div className={css.root}>
            <Swiper
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
            </div>
        </div>
    );
};