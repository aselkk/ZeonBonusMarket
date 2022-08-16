import {useState, useLayoutEffect} from "react";


export const useWindowSize = () => {
    const [size, setSize] = useState({width: 0, height: 0});


    const updateSize = () => {
        setSize({width: window.innerWidth, height: window.innerHeight});
    };

    useLayoutEffect(() => {
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
};