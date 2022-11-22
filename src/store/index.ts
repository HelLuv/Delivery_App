import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import basketSlice from "./slices/basketSlice";
import restaurantSlice from "./slices/restaurantSlice";


const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;