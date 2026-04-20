import { createSlice } from "@reduxjs/toolkit"

const initialState={
    posts:[]
}

const fetchSlice=createSlice({
    name:"fetchData",
    initialState,
    reducers:{
        displayPosts:(state,action)=>{
            state.posts=(action.payload);
        },
        deletePost:(state,action)=>{
            state.posts=state.posts.filter((post)=>post.id!==action.payload)
        },
        addPost:(state,action)=>{
            state.posts.unshift(action.payload);
        }
    }
})

export const {displayPosts,deletePost,addPost}=fetchSlice.actions;
export default fetchSlice.reducer;