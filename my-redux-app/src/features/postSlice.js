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
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.text = text;
      }
    },
  },
});

export const { addPost, updatePost } = postSlice.actions;
export default postSlice.reducer;
