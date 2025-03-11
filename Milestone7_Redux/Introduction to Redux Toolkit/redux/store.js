import { configureStore } from '@reduxjs/toolkit';
import countReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export default store;
