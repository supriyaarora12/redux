import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        category: action.payload.category,
        tags: action.payload.tags,
        createdAt: new Date().toISOString(),
      });
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          text: action.payload.text,
          category: action.payload.category,
          tags: action.payload.tags,
        };
      }
    },
  },
});

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
