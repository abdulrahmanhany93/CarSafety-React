import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sl from "../../../../Injection_Container";
import BrandMethods from "./BrandMethods";
import Servicetypes from "../../../core/utils/SlTypes";
import { isLeft } from "fp-ts/lib/Either";
import Section from "../../../features/brand/domain/entities/section";
import Brand from "../../../features/home/domain/entities/brand";
const initialState = {
  sections: [] as Section[],
  loading: true,
};

export const getSections = createAsyncThunk(
  "brand/getSections",
  async (brand: Brand, { rejectWithValue }) => {
    const brandMethods = sl.get<BrandMethods>(Servicetypes.BrandMethods);
    var result = await brandMethods.getSections(brand.id);
    if (isLeft(result)) {
      console.log(result.left.code);
      return rejectWithValue(result.left.toJSON());
    }
    return result.right;
  }
);
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
