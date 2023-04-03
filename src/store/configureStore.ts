// src/store/configureStore.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import the rootReducer

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
