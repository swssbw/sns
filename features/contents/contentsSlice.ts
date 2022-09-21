import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FeedItemContents } from "../../data";
import axios from "axios";

export const getContentsList = createAsyncThunk("contents/getContentsList", async () => {
  try {
    const {
      data: { quotes },
    } = await axios.get("https://dummyjson.com/quotes");
    return quotes;
  } catch (e) {
    console.log(e);
  }
});

const contentsSlice = createSlice({
  name: "contents",
  initialState: { contentsList: [] as FeedItemContents[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContentsList.pending, (state, action) => {
        state.contentsList = [];
      })
      .addCase(getContentsList.fulfilled, (state, action) => {
        state.contentsList = action.payload;
      })
      .addCase(getContentsList.rejected, (state, action) => {
        state.contentsList = [];
      });
  },
});

export default contentsSlice.reducer;
