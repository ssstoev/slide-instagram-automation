import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateTriggerProps = {
  searchTerm: string
}

const InitialState: InitialStateTriggerProps = {
  searchTerm: ""
}

// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, 
// typically defined together in a single file. The name comes from splitting up the root Redux state object
// into multiple "slices" of state.
export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: InitialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  }
})

// An action is a plain JavaScript object that has a type field. 
// You can think of an action as an event that describes something that happened in the application.
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;