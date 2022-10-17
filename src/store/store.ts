import{configureStore}from "@reduxjs/toolkit";
import { listsSlice } from "./slices/lists";


export const store=configureStore({
    reducer:{
     lists:listsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
