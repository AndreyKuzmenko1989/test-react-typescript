import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {AuthInfoResponse} from "../ts";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const getUserInfoThunk = createAsyncThunk<AuthInfoResponse, void>(
    'auth/getUserInfoThunk',
    async function (_,{rejectWithValue}) {
        try{
            const response = await fetch('');
            if(!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        } catch (error){
            return rejectWithValue(error);
        }
    });


const authSlice :any = createSlice({
    name: 'auth',
    initialState: {
        auth: {
            email: "",
            isLoggedIn: false,
            error: null,
        }
    },
    reducers: {
        onLogin(state, action) {
            state.auth.email = action.payload.email;
            state.auth.isLoggedIn = true;
        },
        onLogout(state) {
            state.auth.email = '';
            state.auth.isLoggedIn = false;
        }
    },
    extraReducers: {
        [getUserInfoThunk.pending] : (state :any) => {
            state.email = "";
            state.isLoggedIn = false;
            state.error = null;
        },
        [getUserInfoThunk.fulfilled] : (state :any, action :any) => {
            state.email = action.payload.email;
            state.isLoggedIn = true;
            state.error = null;
        },
        [getUserInfoThunk.rejected] : (state :any, action:any) => {
            state.email = "";
            state.isLoggedIn = false;
            state.error = action.payload;
        },
    }

});

export const {onLogin, onLogout} = authSlice.actions;
export default authSlice.reducer;