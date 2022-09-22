import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserList } from "../../data";
import axios from "axios";

type initalStateType = {
  userList: UserList;
};

const initialState: initalStateType = {
  userList: [],
};

export const getUsersList = createAsyncThunk("users/getUsersList", async () => {
  const {
    data: { users },
  } = await axios.get("https://dummyjson.com/users");

  const tmp = users.map((user: any) => {
    return {
      id: user.id,
      name: user.firstName,
      image: user.image,
      email: user.email,
    };
  });

  return tmp;
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
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
