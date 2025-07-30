import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
