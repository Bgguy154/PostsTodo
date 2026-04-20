import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: []
}

const fetchSlice = createSlice({
    name: "fetchData",
    initialState,
    reducers: {
        displayPosts: (state, action) => {
            state.posts = (action.payload);
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
        addPost: (state, action) => {
            state.posts.unshift(action.payload);
        },
        editPost: (state, action) => {
            const { id, title } = action.payload;
            const post = state.posts.find((p) => p.id === id);
            if (post) {
                post.title = title;
            }
        }
    }
})

export const { displayPosts, deletePost, addPost,editPost} = fetchSlice.actions;
export default fetchSlice.reducer;