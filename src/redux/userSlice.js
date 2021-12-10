import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    followStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    followSuccess: (state, action) => {
      if (state.currentUser.followings.includes(action.payload)) {
        state.currentUser.followings = state.currentUser.followings.filter(
          (userId) => userId !== action.payload
        );
      } else {
        state.currentUser.followings.push(action.payload);
      }
      state.isFetching = false;
      state.error = false;
    },
    followFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  followStart,
  followSuccess,
  followFailure,
} = userSlice.actions;

export default userSlice.reducer;
