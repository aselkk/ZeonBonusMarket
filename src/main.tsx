import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app/App";
import "animate.css";
import {Provider} from "react-redux";
import {RecoilRoot} from "recoil";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

import {store} from "./app/store";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <App/>
            </Provider>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    </RecoilRoot>
);


/*
TODO: вынести в shared/ui, FlagSelect, Inputs + validation ui
 */