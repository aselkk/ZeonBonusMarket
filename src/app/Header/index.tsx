import {Api} from "@/shared/api";
import {useWindowSize} from "@/shared/hooks";
import {Mobile} from "./Mobile";
import {Desktop} from "./Desktop";
import {useEffect, useState} from "react";


export const Header = () => {

    const [phone, setPhone] = useState("");
    useEffect(() => {
        Api.Info.getNetworkAndContacts()
            .then(data => setPhone(data.phone));
    }, []);

    const {width} = useWindowSize();


    return (width < 768)
        ? <Mobile phone={phone}/>
        : <Desktop phone={phone}/>;
};