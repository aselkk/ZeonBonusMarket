import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {Router} from "./Router";
import {Breadcrumbs} from "./Breadcrumbs";
import {FloatingButton} from "./FloatingButton";
import {Header} from "./Header";
import {Footer} from "./Footer";
import "./styles/null.scss";
import "./styles/global.scss";

import {getNetworkInfoFromServer} from "./store/networkInfoRequest/networkInfoAction";


export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNetworkInfoFromServer());
    }, [dispatch]);


    return (
        <BrowserRouter>
            <Header/>
            <Breadcrumbs/>
            <FloatingButton/>
            <Router/>
            <Footer/>
        </BrowserRouter>
    );
};
