import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Quote, QuoteList } from "../../data";
import axios from "axios";

type initalStateType = {
  contentsList: QuoteList;
};

const initialState: initalStateType = {
  contentsList: [],
};

export const getContentsList = createAsyncThunk("contents/getContentsList", async () => {
  const {
    data: { quotes },
  } = await axios.get("https://dummyjson.com/quotes");
  const tmp = quotes.map((quote: Quote) => {
    return {
      id: quote.id,
      author: quote.author,
      quote: quote.quote,
    };
  });
  return tmp;
});

const contentsSlice = createSlice({
  name: "contents",
  initialState: initialState,
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
