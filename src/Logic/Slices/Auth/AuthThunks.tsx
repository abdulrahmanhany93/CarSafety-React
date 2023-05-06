import { createAsyncThunk } from "@reduxjs/toolkit";
import Servicetypes from "../../../core/utils/SlTypes";

import { isLeft } from "fp-ts/lib/Either";
import sl from "../../../../Injection_Container";

import { LoginActionParams } from "../../../config/UseCases/UseCaseParams";
import AuthMethods from "./AuthActionsMethod";
function getAuthMethods(): AuthMethods {
  return sl.get<AuthMethods>(Servicetypes.AuthMethods);
}
const login = createAsyncThunk(
  "auth/login",
  async (params: LoginActionParams, { rejectWithValue }) => {
    var result = await getAuthMethods().getLoginUseCases({ params });

    if (isLeft(result)) {
      return rejectWithValue(result.left.toJSON());
    }
    return result.right.toJSON();
  }
);
export { login };
