import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthInfoResponse } from '../ts';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;
import any = jasmine.any;

export const getUserAuthThunk = createAsyncThunk<string, { email: string; pass: string }>(
  'auth/getUserAuthThunk',
  async function ({ email, pass }, { rejectWithValue }) {
    try {
      const response = await fetch('');
      if (email != 'test@gmail.com' || pass != 'Qwerty12') {
        throw new Error('Server Error!');
      }

      return email;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice: any = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    isLoggedIn: false,
    error: null,
  },
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
    builder.addCase(getUserAuthThunk.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(getUserAuthThunk.rejected, (state, { payload }) => {
      state.email = '';
      state.isLoggedIn = false;
      state.error = payload;
    });
  },
});

export const { onLogin, onLogout } = authSlice.actions;
export default authSlice.reducer;
