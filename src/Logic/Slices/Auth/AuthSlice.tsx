import { createSlice } from "@reduxjs/toolkit";

import { FirebaseAuthTypes, firebase } from "@react-native-firebase/auth";
import { Failure } from "../../../core/error/failures";

import { showSnackBar } from "../../../core/utils/globalMethods";
import { SnackbarType } from "../../../core/utils/AppEnums";
import { getCurrentUser } from "../../../core/utils/globalMethods";
import { login } from "./AuthThunks";

const initialState = {
  user: getCurrentUser() ?? ({} as FirebaseAuthTypes.User),
  isLoggedIn: false,
  loading: false,
  error: {} as Failure,
};

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
