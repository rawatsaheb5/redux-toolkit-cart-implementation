 import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

// src/redux/store.js
// ----------------------------------------------

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
