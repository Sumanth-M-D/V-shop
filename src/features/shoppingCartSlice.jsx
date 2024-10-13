import { createSlice } from "@reduxjs/toolkit";

// Helper function to save the cart to localStorage
function updateCartInLocalStorage(userId, cartProducts) {
  localStorage.setItem(`${userId}/cart`, JSON.stringify(cartProducts));
}

// Helper function to load the cart from localStorage
function loadCartFromLocalStorageHelper(userId) {
  if (userId) {
    const cart = localStorage.getItem(`${userId}/cart`);
    return cart ? JSON.parse(cart) : [];
  }
  return [];
}

const initialState = {
  cartProducts: [],
  shipping: 0,
  // couponCode: "FIRSTORDER",
  userId: "",
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    loadCartFromLocalStorage(state, action) {
      const userId = action.payload; // Pass userId as an argument
      state.userId = userId;
      state.cartProducts = loadCartFromLocalStorageHelper(userId);
    },

    addProductToCart(state, action) {
      const index = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.cartProducts.push(action.payload);
      } else {
        state.cartProducts[index].quantity += action.payload.quantity;
      }

      updateCartInLocalStorage(state.userId, state.cartProducts);
    },

    removeProduct(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      updateCartInLocalStorage(state.userId, state.cartProducts);
    },

    updateProductQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity < 1) return;
      state.cartProducts = state.cartProducts.map((ele) =>
        ele.id === id ? { ...ele, quantity } : ele
      );
      updateCartInLocalStorage(state.userId, state.cartProducts);
    },

    updateShipping(state, action) {
      state.shipping = action.payload;
    },
  },
});

export const {
  addProductToCart,
  removeProduct,
  updateShipping,
  updateProductQuantity,
  loadCartFromLocalStorage,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
