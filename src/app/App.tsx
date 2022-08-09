import React, {FC} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import {Coupon} from "@/pages/Coupon";
import {Main} from "@/pages/Main";
import {Header} from "./Header";
import {Footer} from "./Footer";
import "./styles/null.scss";
import "./styles/global.scss";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/coupon/:id" element={<Coupon/>}/>
            </Routes>
            <div style={{backgroundColor: "red", height: 300, width: "100%"}}></div>
            <Footer/>
        </BrowserRouter>
    );
};


