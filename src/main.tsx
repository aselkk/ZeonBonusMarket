import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app/App";
import "animate.css";
import { Provider } from "react-redux";
import { store } from "./app/store";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // TODO: хз для чего не понял
    // <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
    // </React.StrictMode>
);
