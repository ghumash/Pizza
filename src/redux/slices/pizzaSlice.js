import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { URL, category, sortBy, order, search, page } = params;
    const res = await axios.get(
      `${URL}${page}${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectPizzaData = (state) => state.pizzaReducer;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
