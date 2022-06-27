import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  GetTokenParam,
  getTokenRequestType,
  getUserAuthThunkRequestType,
  GetUserParams,
  initialStateType,
} from '../ts';

export const getUserAuthThunk = createAsyncThunk<getUserAuthThunkRequestType, GetUserParams>(
  'auth/getUserAuthThunk',
  async function ({ email, password }, { rejectWithValue }) {
    try {
      if (email != 'test@gmail.com' || password != 'Qwerty12') {
        throw new Error('Server Error!');
      }

      return { email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTokenAuthThunk = createAsyncThunk<getTokenRequestType, GetTokenParam>(
  'auth/getTokenAuthThunk',
  async function ({ token }, { rejectWithValue }) {
    try {
      if (!token) {
        throw new Error('Storage Error!');
      }
      return { token };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState: initialStateType = {
  email: '',
  isLoggedIn: false,
  error: null,
};

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
    builder.addCase(getUserAuthThunk.fulfilled, (state: initialStateType, { payload }) => {
      state.email = payload.email;
      state.isLoggedIn = true;
      state.error = null;
      localStorage.setItem('token', payload.email);
    });
    builder.addCase(getUserAuthThunk.rejected, (state: initialStateType, { payload, error }) => {
      state.email = '';
      state.isLoggedIn = false;
      state.error = error?.message || null;
    });
    builder.addCase(getTokenAuthThunk.fulfilled, (state: initialStateType, { payload }) => {
      state.email = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });
  },
});

export const { onLogin, onLogout } = authSlice.actions;
export default authSlice.reducer;
