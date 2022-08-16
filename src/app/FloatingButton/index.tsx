import {useState, useEffect} from "react";
import {ReactComponent as WAIcon} from "@/assets/icons/wa.svg";

import {axiosInstance, DTO} from "@/shared/api";
import css from "./styles.module.scss";


export const FloatingButton = () => {
    const [number, setNumber] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("/info/networks/");
                const result: DTO.PartnerNetworkInfo = response.data;
                const link: any = result.whatsapp;
                setNumber(link);
                console.log(link);
                
            } catch (err) {
                console.error(err);
            }
        }
        )();
    }, []);

    return (
        <div className={css.root}>
            <a target="_blank" href={`https://wa.me/${number}`}><WAIcon/></a>
        </div>
    );
};