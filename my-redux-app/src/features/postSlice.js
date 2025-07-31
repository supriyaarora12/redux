import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push({ id: Date.now(), ...action.payload });
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) state.posts[index] = action.payload;
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) post.likes = (post.likes || 0) + 1;
    },
    dislikePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) post.dislikes = (post.dislikes || 0) + 1;
    },
  },
});

export const { addPost, deletePost, updatePost, likePost, dislikePost } = postSlice.actions;
export default postSlice.reducer;
