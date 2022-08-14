import {Routes, Route, BrowserRouter} from "react-router-dom";

import {Coupon} from "@/pages/Coupon";
import {Main} from "@/pages/Main";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Creator} from "@/pages/Creator";
import "./styles/null.scss";
import "./styles/global.scss";


export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/coupon/:id" element={<Coupon/>}/>
                <Route path="/partner/:id" element={<Creator/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};


