// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});

export default rootReducer;
