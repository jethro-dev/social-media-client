import {
  loginFailure,
  loginStart,
  loginSuccess,
  followFailure,
  followStart,
  followSuccess,
} from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const follow = async (dispatch, userId, currentUserId) => {
  dispatch(followStart());
  try {
    const res = await axios.put(`/users/${userId}/follow`, {
      userId: currentUserId,
    });
    dispatch(followSuccess(userId));
  } catch (err) {
    dispatch(followFailure());
  }
};
