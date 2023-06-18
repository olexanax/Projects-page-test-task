import { configureStore } from "@reduxjs/toolkit";
import projects from "../slices/projectsSlice";
const store = configureStore({
    reducer: { projects },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
