import React, {FC, useState} from "react";
import "./null.scss";
import './App.css'
import "./styles/global.scss";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Coupon} from "../pages/Coupon";
import {Header} from "./Header";
import {Footer} from "./Footer";


export const App: FC = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<LOL/>}/>
                <Route path="/coupon/:id" element={<Coupon/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};


const LOL: FC = () => {
    return (
        <div>
            Lol KEK
        </div>
    )
}