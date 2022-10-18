import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import Cookies from "js-cookie";

//
//  register user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/signup/register`,
        userData,
        config
      );
      return data;
    } catch (error) {
      const err = error?.response?.data;
      return rejectWithValue(err);
    }
  }
);

//
// Log in user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/login`, userData);
      Cookies.set("user", JSON.stringify(data));
      return data;
    } catch (error) {
      const err = error?.response?.data;
      return rejectWithValue(err);
    }
  }
);

// Activate user
export const activateUser = createAsyncThunk(
  "user/activateUser",
  async (payload, { rejectWithValue }) => {
    console.log(payload.token);
    try {
      const config = {
        headers: { authorization: `${payload.token}` },
      };
      const { data } = await axios.post(
        `/api/signup/activate/${payload.token}`,
        config,
        payload
      );
      Cookies.set("user", JSON.stringify({ ...payload, verified: true }));

      return data.success;
    } catch (error) {
      const err = error?.response?.data?.message;

      return rejectWithValue(err);
    }
  }
);
