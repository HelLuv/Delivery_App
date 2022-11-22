import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    _id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
};


export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<typeof initialState.restaurant>) => {
      state.restaurant = action.payload;
    },
  },
});


export const {setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;