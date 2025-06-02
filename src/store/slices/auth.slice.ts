import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { PayloadAction } from "@reduxjs/toolkit";

export interface authState {
  token: string | null;
}

const initialState: authState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<authState>) => {
      state.token = action.payload.token || null;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { login, logout } = tokenSlice.actions;

export const selectToken = (state: RootState) => state.authState.token;

export default tokenSlice.reducer;
