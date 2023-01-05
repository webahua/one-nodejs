<<<<<<< HEAD
import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./authApi";
import { authSlice } from "./authSlice";
import studentApi from './studensApi'

const store = configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        auth:authSlice.reducer,
        [studentApi.reducerPath]:studentApi.reducer,
        auth:authSlice.reducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        authApi.middleware,
        studentApi.middleware
        )
});

setupListeners(store.dispatch)

export default store;


=======
import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./authApi";
import { authSlice } from "./authSlice";

const store = configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        auth:authSlice.reducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch)

export default store;


>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
