import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/slice";
import { postsSlice } from "./Product/slice";

export const store = configureStore({
    reducer: {
        loginReducer: loginSlice.reducer,
        postsReducer: postsSlice.reducer
    }
})