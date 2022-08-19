import React, {useState, useEffect} from "react";

import GoogleMapReact from "google-map-react";

import css from "./styles.module.scss";

import {ReactComponent as Map} from "@/assets/icons/pin.svg";


interface Props {
    info: any,
}

export const SimpleMap = ({info}: Props) => {
    const [geolocation, setGeolocation]:any = useState();
    const coordinates:any = [];
    console.log(info, 'info');
    
    useEffect(() => {
        if (info) {
            setGeolocation(info?.coordinates);
        }
    }, []);

    const getCoordinates = () => { 
        geolocation?.map((x: any) => { 
            coordinates.push(x.geolocation?.split(","));
        }); 
    };


    getCoordinates();

    const defaultProps = {
        center: {
            lat: 42.8889619,
            lng: 74.6048946
        },
        zoom: 13,
        borderRadius: "8px"
    };

    
    

    return (
        <div className={css.map}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyDKCcqNAC3qk_TC4Samg7pgQaZ_iTcuBHM"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {
                    coordinates.map((el: any, idx: number) => (
                        <Map
                            key = {idx}
                            lat= {el[0]}
                            lng = {el[1]}
                        />
                    ))
                }
            </GoogleMapReact>
        </div>
        
    );
};