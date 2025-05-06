import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './todoApi';
import { expenseApi } from './expenseApi';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [expenseApi.reducerPath]: expenseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(
      todoApi.middleware,
      expenseApi.middleware
    ),
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;