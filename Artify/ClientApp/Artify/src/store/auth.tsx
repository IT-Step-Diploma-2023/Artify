import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  username: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.username = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.username = '';
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
