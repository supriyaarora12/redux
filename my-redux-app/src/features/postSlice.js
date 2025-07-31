
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    updatePost: (state, action) => {
      const { id, text } = action.payload;
      const post = state.find((post) => post.id === id);
      if (post) {
        post.text = text;
      }
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
