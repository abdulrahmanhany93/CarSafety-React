import { createAsyncThunk } from "@reduxjs/toolkit";
import ServiceTypes from "../../../core/utils/SlTypes";

import { isLeft } from "fp-ts/lib/Either";
import sl from "../../../../Injection_Container";
import BrandMethods from "./BrandMethods";
import Brand from "../../../features/home/domain/entities/brand";
function getBrandMethods(): BrandMethods {
  return sl.get<BrandMethods>(ServiceTypes.BrandMethods);
}
const getSections = createAsyncThunk(
  "brand/getSections",
  async (brand: Brand, { rejectWithValue }) => {
    var result = await getBrandMethods().getSections(brand.id);
    if (isLeft(result)) {
      console.log(result.left.code);
      return rejectWithValue(result.left.toJSON());
    }
    return result.right;
  }
);
export { getSections };
