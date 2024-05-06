import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    item: [],
  },
  reducers: {
    addItems: (state, actions) => {
      state.item.push(actions.payload);
    },
  },
});
export const { addItems } = SearchSlice.actions;
export default SearchSlice.reducer;
