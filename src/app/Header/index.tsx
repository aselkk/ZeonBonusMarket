import {useWindowSize} from "@/shared/hooks";
import {Mobile} from "./Mobile";
import {Desktop} from "./Desktop";


export const Header = () => {
    const {width} = useWindowSize();

    return (width < 768)
        ? <Mobile/>
        : <Desktop/>;
};