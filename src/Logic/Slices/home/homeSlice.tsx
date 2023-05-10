import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import sl from "../../../../Injection_Container";
import ServiceTypes from "../../../core/utils/SlTypes";
import { NoParams } from "../../../config/UseCases/UseCaseParams";
import { isLeft } from "fp-ts/lib/Either";
import Brand from "../../../features/home/domain/entities/brand";

import { inject } from "inversify";
import { getBrands, getMostSearchedCar, getRandomCars } from "./HomeThunks";
import { Car } from "../../../features/home/domain/entities/car";

const initialState = {
  brands: [] as Brand[],
  loadingBrands: true,
  loadingMostSearchedCar: true,
  loadingRandomCars: true,
  mostSearchedCar: {} as Car,
  randomCars: [] as Car[],
};
const HomeSlice = createSlice({
  name: "Home",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.loadingBrands = false;
    });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.loadingBrands = false;
    });

    builder.addCase(getMostSearchedCar.fulfilled, (state, action) => {
      state.loadingMostSearchedCar = false;
      state.mostSearchedCar = action.payload as Car;
    });
    builder.addCase(getRandomCars.fulfilled, (state, action) => {
      state.loadingRandomCars = false;
      state.randomCars = action.payload as Car[];
      console.log(action.payload);
    });
    builder.addCase(getRandomCars.rejected, (state, action) => {
      state.loadingRandomCars = false;
      console.log(action.payload);
    });
  },
});
export default HomeSlice.reducer;
