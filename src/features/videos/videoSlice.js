import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { base_url,loadStatus } from "../../utils/baseUrl";

const initialState = {
    data:[],
    current: 0,
    status: loadStatus.IDLE,
    error: null
}

export const getVideos = createAsyncThunk('videos/getVideos',async({courseId})=>{
    const {data} = await axios.get(`${base_url}/courses/${courseId}/video`);
    return data.video_links
})

export const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setCurrent(state, action){
            state.current = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    },extraReducers(builder){
        builder.addCase(getVideos.fulfilled, (state, action) =>{
            state.data = action.payload
            state.status = loadStatus.SUCCESSFUL
        }).addCase(getVideos.rejected, (state, action) =>{
            state.status = loadStatus.FAILED
            state.error = action.error
        }).addCase(getVideos.pending, (state) =>{
            state.status = loadStatus.LOADING
        })
    }
})

export const {setCurrent, setStatus} = videoSlice.actions

export const selectVideos = store => store.videos.data
export const selectError = store => store.videos.error
export const selectStatus = store => store.videos.status
export const selectCurrent = store => store.videos.current

export default videoSlice.reducer;