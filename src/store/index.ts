import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/redux/slice';
import phoneReducer from '../features/phones/redux/slice';
import { useDispatch } from 'react-redux';

const reducer = combineReducers({
  auth: authReducer,
  phones: phoneReducer,
});

const store = configureStore({
  reducer,
});

export default store;

export type PortalStore = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
