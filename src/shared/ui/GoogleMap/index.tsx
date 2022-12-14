import React, {useState, useEffect} from "react";

import GoogleMapReact from "google-map-react";

import css from "./styles.module.scss";

import {ReactComponent as Map} from "@/assets/icons/pin.svg";


interface Props {
    info: any;
}

export const SimpleMap = ({info}: Props) => {
    const [geolocation, setGeolocation]:any = useState();
    const coordinates:any = [];

    const MapIcon = ({lat, lng} : {lat: any, lng: any}) => <Map/>;


    useEffect(() => {
        if (info) {
            setGeolocation(info?.coordinates);
        }
    }, [info]);

    const getCoordinates = () => { 
        geolocation?.map((x: any) => { 
            coordinates.push(x.geolocation?.split(","));
        }); 
    };

    if (!!geolocation) {
        getCoordinates();
    }

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
                        <MapIcon
                            key = {idx}
                            lat={el[0]}
                            lng={el[1]}
                        />
                    ))
                }
            </GoogleMapReact>
        </div>
        
    );
};