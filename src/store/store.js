import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import APIService from "./service/APIServie";

const store = configureStore({
    reducer: {
       [ APIService.reducerPath] : APIService.reducer
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(APIService.middleware)
})
export default store