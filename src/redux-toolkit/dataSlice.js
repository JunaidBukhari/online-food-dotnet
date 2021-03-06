import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [],
  cart: [],
  loggedInUser: {},
  orders: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    clearData: (state, action) => {
      state.menu = [];
      state.cart = [];
      state.loggedInUser = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrders, addToCart, setMenu, setUser, clearData } =
  dataSlice.actions;

export default dataSlice.reducer;
