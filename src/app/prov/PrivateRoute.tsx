// import { Route,  } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
//
// import { authAtom } from '_state';
//
// export { PrivateRoute };
//
// function PrivateRoute({ component: Component, ...rest }) {
//     const auth = useRecoilValue(authAtom);
//     return (
//         <Route {...rest} render={props => {
//             if (!auth) {
//                 // not logged in so redirect to login page with the return url
//                 return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//             }
//
//             // authorized so return component
//             return <Component {...props} />
//         }} />
//     );


import React from "react";
import {useRecoilValue} from "recoil";
import {Navigate} from "react-router-dom";
import {userModel} from "@/entities/user";



export function withAuthRoute<T>(Component: React.ComponentType<T>) {
    return (props: any) => {

        const {isAuth} = userModel.useAuth();
        // const login = useRecoilValue(loginAtom);
        if (!isAuth)
            return <Navigate to="/"/>;
        return <Component {...props}/>;
    };
}

