import { createAsyncThunk } from "@reduxjs/toolkit";
import ServiceTypes from "../../../core/utils/SlTypes";
import HomeMethods from "./HomeMethods";
import { isLeft } from "fp-ts/lib/Either";
import sl from "../../../../Injection_Container";
function getHomeMethods(): HomeMethods {
  return sl.get<HomeMethods>(ServiceTypes.HomeMethods);
}
const getBrands = createAsyncThunk(
  "home/getBrands",
  async (_, { rejectWithValue }) => {
    var result = await getHomeMethods().getBrands();
    if (isLeft(result)) {
      console.log(result.left.code);
      return rejectWithValue(result.left.toJSON());
    }

    return result.right;
  }
);
const getMostSearchedCar = createAsyncThunk(
  "home/getMostSearchedCar",
  async (_, { rejectWithValue }) => {
    var result = await getHomeMethods().getMostSearchedCar();
    if (isLeft(result)) {
      console.log(result.left.code);
      return rejectWithValue(result.left.toJSON());
    }
    return result.right;
  }
);
const getRandomCars = createAsyncThunk(
  "home/getRandomCars",
  async (_, { rejectWithValue }) => {
    var result = await getHomeMethods().getRandomCars();
    if (isLeft(result)) {
      console.log(result.left.code);
      return rejectWithValue(result.left.toJSON());
    }
    return result.right;
  }
);
export { getBrands, getMostSearchedCar, getRandomCars };
