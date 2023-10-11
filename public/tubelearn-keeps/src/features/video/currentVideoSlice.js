import { createSlice } from "@reduxjs/toolkit";

const initialState ={
        "id": "64f430d68d62e2b521a46020",
        "title": "Pyhton (Numpy)-2",
        "description": "Python Course of numpuy Libray ",
        "link": "https://www.youtube.com/playlist?list=PLjVLYmrlmjGfgBKkIFBkMNGG7qyRfo00W"
}

const currentSlice = createSlice({
    name:"current",
    initialState,
    reducers:{
        setCurrent: (state,action)=>{
            state = action.payload.current
        }
    }
})

export const {setCurrent} = currentSlice.actions

export default currentSlice.reducer