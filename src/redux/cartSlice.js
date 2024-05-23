import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem: (state, action) => {
      console.log(action);
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        // If the item exists, decrease its quantity by 1
        existingItem.qty -= 1;
        // If the quantity becomes zero, remove the item from the cart
        if (existingItem.qty === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
