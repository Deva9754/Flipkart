import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, actions) => {
      state.items = actions?.payload;
    },
  },
});
export const { addItems } = SearchSlice.actions;
export default SearchSlice.reducer;
