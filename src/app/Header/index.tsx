import React, {FC, useState} from "react";
// import cn from "classnames";
import {isMobile} from "react-device-detect";
import {Mobile} from "./Mobile";
import {Desktop} from "./Desktop";


export const Header: FC = () => {

    return isMobile
        ? <Mobile/> 
        : <Desktop/>;

};