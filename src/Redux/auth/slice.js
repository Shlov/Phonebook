import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operation';

const initialState = {
  user: {user: null, email: null},
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [logOut.fulfilled](state) {
      state.user = {user: null, email: null};
      state.token = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = action.payload;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  }
});

export const authReducer = authSlice.reducer;