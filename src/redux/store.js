import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TmdbCoreApi } from './services/Tmdb';


export const store = configureStore({
    reducer:{
       [TmdbCoreApi.reducerPath]: TmdbCoreApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(TmdbCoreApi.middleware),
});