import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { base_url,loadStatus } from "../../utils/baseUrl";

const initialState = {
    data:[],
    status: loadStatus.IDLE,
    error: null
}

export const getCourses = createAsyncThunk('videos/getVideos',async()=>{
    const {data} = await axios.get(`${base_url}/courses`)
    return data.courses
})

export const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
    },extraReducers(builder){
        builder.addCase(getCourses.fulfilled, (state, action) =>{
            state.data = action.payload
            state.status = loadStatus.SUCCESSFUL
        }).addCase(getCourses.rejected, (state, action) =>{
            state.status = loadStatus.FAILED
            state.error = action.error.message
        }).addCase(getCourses.pending, (state) =>{
            state.status = loadStatus.LOADING
        })
    }
})

export const {setCurrent} = coursesSlice.actions

export const selectCourses = store => store.courses.data
export const selectError = store => store.courses.error
export const selectStatus = store => store.courses.status

export default coursesSlice.reducer;