import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "videos":[],
    "isLoading":true
}

export const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload.videos
        },
        setIsLoading: (state,action)=>{
            state.isLoading = action.payload.isLoading
        }
    }
})

export const {
    setVideos,
    setIsLoading
} = videoSlice.actions;

export default videoSlice.reducer;