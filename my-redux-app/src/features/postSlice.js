
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        liked: false, // Add liked status
      });
    },
    updatePost: (state, action) => {
      const { id, text } = action.payload;
      const post = state.find((p) => p.id === id);
      if (post) {
        post.text = text;
      }
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    toggleLike: (state, action) => {
      const post = state.find((p) => p.id === action.payload);
      if (post) {
        post.liked = !post.liked;
      }
    },
  },
});

export const { addPost, updatePost, deletePost, toggleLike } = postSlice.actions;
export default postSlice.reducer;
