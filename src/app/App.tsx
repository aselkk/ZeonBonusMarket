import {Routes, Route, BrowserRouter} from "react-router-dom";

import {Coupon} from "@/pages/Coupon";
import {Main} from "@/pages/Main";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {AboutUs} from "@/pages/AboutUs/AboutUs";
import {Creator} from "@/pages/Creator";
import "./styles/null.scss";
import "./styles/global.scss";
import {TrendCoupons} from "@/pages/TrendCoupons";
import {Contacts} from "@/pages/AboutUs/Contacts";
import {HelpPage} from "@/pages/AboutUs/Help";
import {PrivacyPolicy} from "@/pages/AboutUs/PrivacyPolicy";
import {ErrorPage} from "@/pages/AboutUs/ErrorPage";


export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/trends" element={<TrendCoupons/>}/>
                <Route path="/coupon/:id" element={<Coupon/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/helpPage" element={<HelpPage/>}/>
                <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
                <Route path="/errorPage" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>

        </BrowserRouter>
    );
};
