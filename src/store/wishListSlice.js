import { createSlice } from "@reduxjs/toolkit";

const loadWishlistFromLocalStorage = () => {
  const storedWish = localStorage.getItem('wishList');
  return storedWish ? JSON.parse(storedWish) : []; 
};



const saveWishlistToLocalStorage = (items) => {
  try {
    localStorage.setItem("wishList", JSON.stringify(items));
  } catch (error) {
    console.error("Errorr wishList:", error);
  }
};

const initialState = {
  items: loadWishlistFromLocalStorage(),
};

const wishlistSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        saveWishlistToLocalStorage(state.items);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveWishlistToLocalStorage(state.items);
    },
    toggleWishlist: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      saveWishlistToLocalStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state.items);
    }
  }
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
