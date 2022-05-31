import { Action, createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
  topZip: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topZip = action.payload;
    },
  },
});

export const { setTopCars } = homePageSlice.actions;
export default homePageSlice.reducer;
