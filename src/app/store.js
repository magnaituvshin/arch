import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {dataApi} from "../services/dataApi";

const store = configureStore ({
    reducer: {
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)
});
setupListeners(store.dispatch);
export default store;