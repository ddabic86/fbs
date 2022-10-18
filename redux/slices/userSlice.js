import { createSlice } from "@reduxjs/toolkit";
import { activateUser, loginUser, registerUser } from "../actions/userActions";

const initialState = {
  loading: false,
  error: null,
  auth: {},
};
export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    restoreAfterUpdate: (state) => {
      state.loading = false;
      state.isUpdated = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    //
    // REGISTER USER
    builder.addCase(registerUser.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    }),
      builder.addCase(registerUser.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
        };
      });

    //
    // LOGIN USER
    builder.addCase(loginUser.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    }),
      builder.addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          error: null,
          loading: false,
          isAuthenticated: true,
          auth: action.payload,
        };
      }),
      builder.addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: action.payload,
        };
      });

    //
    // ACTIVATE USER
    builder.addCase(activateUser.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    }),
      builder.addCase(activateUser.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          isActive: true,
          error: null,
        };
      }),
      builder.addCase(activateUser.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
        };
      });
  },
});

export const { restoreAfterUpdate } = UserSlice.actions;
export default UserSlice.reducer;
