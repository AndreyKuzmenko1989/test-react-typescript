import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/redux/slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
