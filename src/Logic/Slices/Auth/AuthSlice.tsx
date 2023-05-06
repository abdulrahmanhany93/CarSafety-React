import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sl from "../../../../Injection_Container";
import { LoginActionParams } from "../../../config/UseCases/UseCaseParams";
import { isLeft } from "fp-ts/lib/Either";
import Servicetypes from "../../../core/utils/SlTypes";
import { FirebaseAuthTypes, firebase } from "@react-native-firebase/auth";
import { Failure } from "../../../core/error/failures";
import AuthMethods from "./AuthActionsMethod";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { BaseToast } from "react-native-toast-message";
import Colors from "../../../core/utils/colors";
import { showSnackBar } from "../../../core/utils/globalMethods";
import { SnackbarType } from "../../../core/utils/AppEnums";
import { getCurrentUser } from "../../../core/utils/globalMethods";

const initialState = {
  user: getCurrentUser() ?? ({} as FirebaseAuthTypes.User),
  isLoggedIn: false,
  loading: false,
  error: {} as Failure,
};

export const login = createAsyncThunk(
  "auth/login",
  async (params: LoginActionParams, { rejectWithValue }) => {
    const methods = sl.get<AuthMethods>(Servicetypes.AuthMethods);
    var result = await methods.getLoginUseCases({ params });

    if (isLeft(result)) {
      return rejectWithValue(result.left.toJSON());
    }
    return result.right.toJSON();
  }
);
const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      showSnackBar("pleaseWait", SnackbarType.Info);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload as FirebaseAuthTypes.User;
      console.log(action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as Failure;
      showSnackBar(state.error.message, SnackbarType.Error);
    });
  },
});

export default authSlice.reducer;
