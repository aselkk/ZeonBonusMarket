import {useWindowSize} from "@/shared/hooks";
import {Mobile} from "./Mobile";
import {Desktop} from "./Desktop";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


export const Header = () => {

    const [phone, setPhone] = useState("");

    const networkInfo = useSelector((state: any) => state.networkInfo.items);

    useEffect(() => {
        setPhone(networkInfo.phone);
    }, [networkInfo]);

    const {width} = useWindowSize();


    return (width < 768)
        ? <Mobile phone={phone}/>
        : <Desktop phone={phone}/>;
};