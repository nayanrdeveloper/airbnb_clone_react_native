import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlistPlace",

  initialState: {
    places: [],
  },

  reducers: {
    addWishlistPlace: (state, action) => {
      const isWishlist = state.places.findIndex(
        (place) => place.title == action.payload.title
      );
      console.log(isWishlist);

      if (isWishlist <= 0) {
        state.places = [...state.places, action.payload];
      }
    },

    removeWishlistPlace: (state, action) => {
      const wishlistIndex = state.places.findIndex(
        (place) => place.title == action.payload.title
      );
      let newWishlistPlaces = [...state.places];

      if (wishlistIndex >= 0) {
        newWishlistPlaces.splice(wishlistIndex, 1);
      } else {
        console.log(
          `Can't remove place because ${action.payload.id} not in wishlist`
        );
      }
      state.places = newWishlistPlaces;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWishlistPlace, removeWishlistPlace } = wishlistSlice.actions;

export const selectedWishlistPlaces = (state) => state.wishlistPlace.places;

export default wishlistSlice.reducer;
