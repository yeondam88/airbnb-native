import { createSlice } from '@reduxjs/toolkit';
import API from '../api';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    id: null,
    token: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { token },
    } = await API.login(form);
    if (token) {
      console.log({ token });
      dispatch(logIn({ token }));
    }
  } catch (error) {
    alert('Wrong user or password');
  }
};

export default userSlice.reducer;
