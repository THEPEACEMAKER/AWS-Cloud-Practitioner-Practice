import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    showAnswers: false,
    searchQuery: "",
  },
  reducers: {
    toggleAnswers: (state) => {
      state.showAnswers = !state.showAnswers;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { toggleAnswers, setSearchQuery } = quizSlice.actions;

export default quizSlice.reducer;
