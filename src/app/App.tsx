import React, {FC, useState} from "react";
import "./null.scss";
import "./styles/global.scss";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Coupon} from "@/pages/Coupon";
import {Main} from "@/pages/Main";
import {Header} from "./Header";
import {Footer} from "./Footer";
import css from "./App.module.scss";


export const App: FC = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/coupon/:id" element={<Coupon/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};


