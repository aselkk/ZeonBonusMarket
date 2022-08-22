import {Route, Routes} from "react-router-dom";

import {SignUp} from "@/pages/SignUp";
import {SignIn} from "@/pages/SignIn";
import {Main} from "@/pages/Main";
import {TrendCoupons} from "@/pages/TrendCoupons";
import {FavoriteCoupons} from "@/pages/FavoriteCoupons";
import {SearchResult} from "@/pages/SearchResult";
import {CategoryCoupons} from "@/pages/CategoryCoupons";
import {Coupon} from "@/pages/Coupon";
import {Creator} from "@/pages/Creator";
import {Contacts} from "@/pages/Contacts";
import {AboutUs} from "@/pages/AboutUs";
import {Help} from "@/pages/Help";
import {PrivacyPolicy} from "@/pages/PrivacyPolicy";
import {ErrorPage} from "@/pages/ErrorPage";


export const Router = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/trends" element={<TrendCoupons/>}/>
            <Route path="/favorites" element={<FavoriteCoupons/>}/>
            <Route path="/search" element={<SearchResult/>}/>
            <Route path="/category/:id" element={<CategoryCoupons/>}/>
            <Route path="/coupon/:id" element={<Coupon/>}/>
            <Route path="/partner/:partnerId" element={<Creator/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};