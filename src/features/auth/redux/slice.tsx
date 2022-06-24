import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;
import any = jasmine.any;
import {getUserAuthThunkRequestType, initialStateType} from '../ts';


export const getUserAuthThunk = createAsyncThunk<getUserAuthThunkRequestType, { email: string; pass: string }>(
  'auth/getUserAuthThunk',
  async function ({ email, pass }, { rejectWithValue }) {
    try {
      const response = await fetch('');
      if (email != 'test@gmail.com' || pass != 'Qwerty12') {
        throw new Error('Server Error!');
      }

      return {email};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
let initialState : initialStateType = {
  email: '',
  isLoggedIn: false,
  error: null,
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin(state, action) {
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    onLogout(state) {
      state.email = '';
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserAuthThunk.pending, state => {
      state.isLoggedIn = false;
      state.error = null;
    });
    builder.addCase(getUserAuthThunk.fulfilled, (state :initialStateType, { payload }) => {
      state.email = payload.email;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(getUserAuthThunk.rejected, (state :initialStateType, { payload, error }) => {
      state.email = '';
      state.isLoggedIn = false;
      state.error = error;
    });
  },
});

export const { onLogin, onLogout } = authSlice.actions;
export default authSlice.reducer;
