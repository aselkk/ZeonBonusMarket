import React, {useLayoutEffect, useState, FC} from "react";
import {Mobile} from "./Mobile";
import {Desktop} from "./Desktop";


export const Header: FC = () => {

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
        }, []);
        return size;
    }

    const [width, height] = useWindowSize();
    console.log(width, height);

    if (width < 768) {
        return <Mobile/>; 
    } 
    return <Desktop/>;
};