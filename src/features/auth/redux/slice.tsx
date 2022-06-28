import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthThunkRequestType, GetUserParams, initialStateType } from '../ts';

import { setStorageValue, getStorageValue } from '../../../api/localStorage';

export const getUserAuthThunk = createAsyncThunk<getUserAuthThunkRequestType, GetUserParams>(
  'auth/getUserAuthThunk',
  async function ({ email, password }, { rejectWithValue }) {
    try {
      if (email != 'test@gmail.com' || password != 'Qwerty12') {
        throw 'Server Error!';
      }

      setStorageValue('accessToken', email);
      return { email };
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
    onTokenLogin: function (state, action) {
      state.email = action.payload.token;
      state.isLoggedIn = true;
    },
    onTokenLogout(state) {
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
    });
    builder.addCase(getUserAuthThunk.rejected, (state: initialStateType, { payload, error }) => {
      state.email = '';
      state.isLoggedIn = false;
      state.error = error?.message || null;
    });
  },
});

export const { onTokenLogin, onTokenLogout } = authSlice.actions;
export default authSlice.reducer;
