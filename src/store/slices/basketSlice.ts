import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<{ _id: number | string }>) => {
      const index = state.items.findIndex((item) => item._id === action.payload._id);

      const newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant Remove product (id: ${action.payload._id}) as its not basket`);
      }

      state.items = newBasket;
    },
    clearBasket: (state) => {
      state.items = [];
    }
  },
});

export const {addToBasket, removeFromBasket, clearBasket} = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsById = (state, id) => state.basket.items.filter((item) => item._id == id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;