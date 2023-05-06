import { createSlice } from "@reduxjs/toolkit";

import Section from "../../../features/brand/domain/entities/section";
import { getSections } from "./BrandThunks";
const initialState = {
  sections: [] as Section[],
  loading: true,
};

const brandSlice = createSlice({
  name: "brand",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSections.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSections.fulfilled, (state, action) => {
      state.sections = action.payload;
      state.loading = false;
    });
    builder.addCase(getSections.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default brandSlice.reducer;
