import { createSlice } from "@reduxjs/toolkit";

// Helper function to save the wishlist to localStorage
function updateWishlistInLocalStorage(userId, wishlistProducts) {
  localStorage.setItem(`${userId}/wishlist`, JSON.stringify(wishlistProducts));
}

// Helper function to load the wishlist from localStorage
function loadWishlistFromLocalStorageHelper(userId) {
  if (userId) {
    const wishlist = localStorage.getItem(`${userId}/wishlist`);
    return wishlist ? JSON.parse(wishlist) : [];
  }
  return [];
}

const initialState = {
  wishlistProducts: [],
  userId: "",
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    loadWishlistFromLocalStorage(state, action) {
      const userId = action.payload; // Pass userId as an argument
      state.userId = userId;
      state.wishlistProducts = loadWishlistFromLocalStorageHelper(userId);
    },

    addProductToWishlist(state, action) {
      const index = state.wishlistProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.wishlistProducts.push(action.payload);
      } else {
        state.wishlistProducts[index].quantity += action.payload.quantity;
      }

      updateWishlistInLocalStorage(state.userId, state.wishlistProducts);
    },

    removeProduct(state, action) {
      state.wishlistProducts = state.wishlistProducts.filter(
        (product) => product.id !== action.payload
      );
      updateWishlistInLocalStorage(state.userId, state.wishlistProducts);
    },
  },
});

export const {
  loadWishlistFromLocalStorage,
  addProductToWishlist,
  removeProduct,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
