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
  } = await axios.get("https://dummyjson.com/users?limit=5&skip=0");

  const tmp = users.map((user: any, index: number) => {
    return {
      id: user.id,
      name: user.firstName,
      image: `https://i.pravatar.cc/150?img=${index + 1}`,
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
