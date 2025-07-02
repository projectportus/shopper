import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = (uid) => {
  if (!uid) return { items: [], orderedItems: [] };
  const storedCart = localStorage.getItem(`cart_${uid}`);
  return storedCart ? JSON.parse(storedCart) : { items: [], orderedItems: [] };
};

const initialState = {
  items: [],
  orderedItems: [],
  uid: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload;
      const savedCart = loadCartFromLocalStorage(action.payload);
      state.items = savedCart.items || [];
      state.orderedItems = savedCart.orderedItems || [];
    },

    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      if (state.uid) {
        localStorage.setItem(`cart_${state.uid}`, JSON.stringify({
          items: state.items,
          orderedItems: state.orderedItems,
        }));
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
      if (state.uid) {
        localStorage.setItem(`cart_${state.uid}`, JSON.stringify({
          items: state.items,
          orderedItems: state.orderedItems,
        }));
      }
    },

    clearCart: (state) => {
      state.items = [];
      if (state.uid) {
        localStorage.setItem(`cart_${state.uid}`, JSON.stringify({
          items: [],
          orderedItems: state.orderedItems,
        }));
      }
    },

    placeOrder: (state) => {
      state.orderedItems = [...state.orderedItems, ...state.items];
      state.items = [];
      if (state.uid) {
        localStorage.setItem(`cart_${state.uid}`, JSON.stringify({
          items: [],
          orderedItems: state.orderedItems,
        }));
      }
    },

    clearCartState: (state) => {
      state.items = [];
      state.orderedItems = [];
      state.uid = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  placeOrder,
  setUser,
  clearCartState,
} = cartSlice.actions;

export default cartSlice.reducer;
