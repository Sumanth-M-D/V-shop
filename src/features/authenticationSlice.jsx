import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadCartFromLocalStorage } from "./shoppingCartSlice";
import { loadWishlistFromLocalStorage } from "./wishlistSlice";

const initialState = {
  authType: "login",
  isAuthenticated: false,
  userId: "", // For API base authentication
  error: "",
  status: "",
};

// LOCAL STORAGE -> FAKE AUTHENTICATION
export const createUser = createAsyncThunk(
  "authentication/createUser",
  async ({ email, password }) => {
    localStorage.setItem(email, password);
    return email;
  }
);

export const authenticate = createAsyncThunk(
  "authentication/authenticate",
  async ({ email, password }, { dispatch }) => {
    const storedPassword = localStorage.getItem(email);
    let error = "";

    // If user does not exist
    if (!storedPassword) {
      error = "User does not exist. Please signup";
      return { email, isPasswordCorrect: false, error };
    }

    // If user exist
    const isPasswordCorrect = storedPassword === password;

    if (isPasswordCorrect) {
      dispatch(loadCartFromLocalStorage(email));
      dispatch(loadWishlistFromLocalStorage(email));
    } else {
      error = "Invalid password. Please try again";
    }

    return { email, isPasswordCorrect, error };
  }
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthType(state, action) {
      state.authType = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.error = "";
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    // LOCAL STORAGE -> FAKE AUTHENTICATION
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "success";
        state.isAuthenticated = true;
        state.userId = action.payload;
      })
      .addCase(createUser.rejected, (state) => {
        state.error = "Cannot authenticate the user now. Try again later";
        state.status = "fail";
      })
      .addCase(authenticate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.status = "success";
        const { email, isPasswordCorrect, error } = action.payload;
        state.userId = email;
        state.isAuthenticated = isPasswordCorrect;
        if (error.length > 0) {
          state.error = error;
        }
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.error = "Cannot authenticate the user now. Try again later";
        state.error = action.payload;
        state.status = "fail";
      });
  },
});

export const { setAuthType, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
