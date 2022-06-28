import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialStateType, getPhonesThunkRequestType } from '../ts';

export const getPhonesThunk = createAsyncThunk<getPhonesThunkRequestType>(
  'phones/getPhonesThunk',
  async function (getPhonesThunkRequestType, { rejectWithValue }) {
    try {
      const response = await fetch('./phones.json');
      if (response.status != 200) {
        throw new Error('Server Error!');
      }

      const phones = await response.json();

      return { phones };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState: initialStateType = {
  phones: [],
  isLoading: false,
  error: null,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhonesThunk.pending, state => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getPhonesThunk.fulfilled, (state: initialStateType, { payload }) => {
      state.phones = payload.phones;
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPhonesThunk.rejected, (state: initialStateType, { payload, error }) => {
      state.phones = [];
      state.isLoading = false;
      state.error = error?.message || null;
    });
  },
});

export default phonesSlice.reducer;
