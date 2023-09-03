import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: "https://www.youtube.com/embed/o34Lgq98H3k",
    title: "Slow Down"
}

export const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setVideo: (state, action) => {
            state.video = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        }
    }
})

export const {
    setVideo,
    setTitle
} = videoSlice.actions;

export default videoSlice.reducer;