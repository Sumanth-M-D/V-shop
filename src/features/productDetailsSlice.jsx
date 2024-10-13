import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../config/config";

const initialState = {
  productId: null,
  productData: {},
  status: "idle", // idle | loading | success | fail
  error: "",
  quantity: 1,
};

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchData",
  async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    const data = await res.json();
    return data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,

  reducers: {
    setProductId(state, action) {
      state.productId = action.payload;
    },
    setProductData(state, action) {
      state.productData = { ...action.payload };
      state.status = "success";
    },
    updateProductQuantity(state, action) {
      if (action.payload <= 0) return;
      state.quantity = action.payload;
    },
    resetProductDetails() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.productData = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.status = "fail";
        state.error = "Unable to load product data. Please try again later";
      });
  },
});

export const {
  setProductId,
  setProductData,
  updateProductQuantity,
  resetProductDetails,
} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
