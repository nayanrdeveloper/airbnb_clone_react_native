import { configureStore } from "@reduxjs/toolkit";
import { placeSlice } from "./features/placesApi";
import wishlistSlice from "./features/wishlist";

export default configureStore({
  reducer: {
    wishlistPlace: wishlistSlice,
    [placeSlice.reducerPath]: placeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(placeSlice.middleware),
});
