import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Quote, QuoteList } from "../../data";
import axios from "axios";

type initalStateType = {
  contentsList: QuoteList;
};

const initialState: initalStateType = {
  contentsList: [],
};

const imageArray: string[] = [
  "https://picsum.photos/id/10/370/370",
  "https://picsum.photos/id/100/370/370",
  "https://picsum.photos/id/1000/370/370",
  "https://picsum.photos/id/1001/370/370",
  "https://picsum.photos/id/1002/370/370",
  "https://picsum.photos/id/1004/370/370",
  "https://picsum.photos/id/1006/370/370",
  "https://picsum.photos/id/1008/370/370",
  "https://picsum.photos/id/1009/370/370",
  "https://picsum.photos/id/1016/370/370",
  "https://picsum.photos/id/1015/370/370",
  "https://picsum.photos/id/1018/370/370",
  "https://picsum.photos/id/1019/370/370",
  "https://picsum.photos/id/1021/370/370",
  "https://picsum.photos/id/1022/370/370",
  "https://picsum.photos/id/1029/370/370",
  "https://picsum.photos/id/1033/370/370",
];

export const getContentsList = createAsyncThunk("contents/getContentsList", async () => {
  const {
    data: { quotes },
  } = await axios.get("https://dummyjson.com/quotes?limit=4&skip=0");
  const tmp = quotes.map((quote: Quote, index: number) => {
    return {
      id: quote.id,
      author: quote.author,
      quote: quote.quote,
      image: imageArray[index],
    };
  });
  return tmp;
});

export const getContentsByScroll = createAsyncThunk("contents/getContentsByScroll", async (page: number) => {
  const {
    data: { quotes },
  } = await axios.get(`https://dummyjson.com/quotes?limit=4&skip=${page}`);

  const tmp = quotes.map((quote: Quote) => {
    return {
      id: quote.id,
      author: quote.author,
      quote: quote.quote,
      image: imageArray[quote.id],
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
      // ===== getContentsList =====
      .addCase(getContentsList.pending, (state, action) => {
        state.contentsList = [];
      })
      .addCase(getContentsList.fulfilled, (state, action) => {
        state.contentsList = action.payload;
      })
      .addCase(getContentsList.rejected, (state, action) => {
        state.contentsList = [];
      })
      // ===== getContentsByScroll =====
      .addCase(getContentsByScroll.pending, (state, action) => {
        state.contentsList = [...state.contentsList];
      })
      .addCase(getContentsByScroll.fulfilled, (state, action) => {
        state.contentsList = [...state.contentsList, ...action.payload];
      })
      .addCase(getContentsByScroll.rejected, (state, action) => {
        state.contentsList = [...state.contentsList];
      });
  },
});

export default contentsSlice.reducer;
