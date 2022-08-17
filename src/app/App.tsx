import {Provider} from "react-redux";
import {Routes, Route, BrowserRouter} from "react-router-dom";


import {store} from "./store";

import {Coupon} from "@/pages/Coupon";
import {Main} from "@/pages/Main";
import {FloatingButton} from "./FloatingButton";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {AboutUs} from "@/pages/AboutUs/AboutUs";
import {Creator} from "@/pages/Creator";
import "./styles/null.scss";
import "./styles/global.scss";
import {TrendCoupons} from "@/pages/TrendCoupons";
import {SearchResult} from "@/pages/SearchResult";
import {Contacts} from "@/pages/AboutUs/Contacts";
import {Help} from "@/pages/Help";
import {PrivacyPolicy} from "@/pages/AboutUs/PrivacyPolicy";
import {ErrorPage} from "@/pages/AboutUs/ErrorPage";
import {Breadcrumbs} from "./Breadcrumbs";


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Breadcrumbs/>
                <FloatingButton/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/trends" element={<TrendCoupons/>}/>
                    <Route path="/coupon/:id" element={<Coupon/>}/>
                    <Route path="/search" element={<SearchResult/>}/>
                    <Route path="/partner/:partnerId" element={<Creator/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/help" element={<Help/>}/>
                    <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/> {/* TODO: change*/}
                    <Route path="*" element={<ErrorPage/>}/> {/* TODO: change*/}


                </Routes>
                <Footer/>

            </BrowserRouter>
        </Provider>
    );
};
