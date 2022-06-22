import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/auth/redux/slice';

export default configureStore({
    reducer: {
        auth: authReducer,
    },
});