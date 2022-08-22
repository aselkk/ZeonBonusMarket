import { Route, Routes} from "react-router-dom";

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
import {PasswordChange} from "@/features/auth/__TODO_PasswordChange";
import { MyCoupons } from "@/pages/MyCoupons";
import { Profile } from "@/pages/Personal/Profile";
import { Smena } from "@/pages/Personal/Smena";
import { SmenaNomera } from "@/pages/Personal/SmenaNomera";



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
            <Route path="/recovery" element={<PasswordChange/>}/>
            <Route path="/my-coupons" element={<MyCoupons/>}/>
            <Route path="/my-profile" element={<Profile/>}/>
            <Route path="/change-pass" element={<Smena/>}/>
            <Route path="/change-nom" element={<SmenaNomera/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};