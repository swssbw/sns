import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FeedItemContents } from "../../data";
import axios from "axios";

export const getUsersList = createAsyncThunk("users/getUsersList", async () => {
  const {
    data: { users },
  } = await axios.get("https://dummyjson.com/users");
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState: { userList: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersList.pending, (state, action) => {
        state.userList = [];
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(getUsersList.rejected, (state, action) => {
        state.userList = [];
      });
  },
});

export default usersSlice.reducer;
