import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import type { RootState } from '@state/store';


export type Token = string | null;
export type Tokens = {
  accessToken: Token,
  refreshToken: Token,
};

type User = {
  name: string,
  email: string,
};

type AuthState = Tokens & { user: User | null };

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setTokens(state, { payload }: PayloadAction<Tokens>) {
      return { ...state, ...payload };
    },
    setAccessToken(state, { payload: token }: PayloadAction<Token>) {
      console.log('token = ', token);
      state.accessToken = token;
    },
    logout() {
      return initialState;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { logout, setTokens, setAccessToken } = authSlice.actions;


export const authReducerName = authSlice.name;

const authPersistConfig = {
  key: authReducerName,
  storage: AsyncStorage,
  blacklist: ['refreshToken'] as (keyof AuthState)[],
};

export default persistReducer(authPersistConfig, authSlice.reducer);


export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
