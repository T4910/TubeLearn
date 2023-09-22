import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videoSlice";
import coursesReduer from "../features/courses/coursesSlice"

export const store = configureStore({
    reducer: {
        videos: videoReducer,
        courses: coursesReduer
    }
})