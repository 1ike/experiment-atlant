import {
  createSlice, PayloadAction, combineReducers, createAction,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import type { RootState } from '$store';
import createSecureStorage from '../../../lib/SecureStorage';


export type Token = string | null;
export type Tokens = {
  accessToken: Token,
  refreshToken: Token,
};


const logoutActionCreator = createAction('LOGOUT');
const setTokensActionCreator = createAction<Tokens>('SET_TOKENS');

/**
 * Non secure persist part of auth (persist with AsyncStorage).
 */

type User = {
  name: string,
  email: string,
} | null;

type InitialState = {
  accessToken: Token | null,
  user: User | null,
};

const initialState: InitialState = {
  accessToken: null,
  user: null,
};


const nonSecurePersistSlice = createSlice({
  name: 'nonSecurePersist',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setAccessToken(state, { payload: token }: PayloadAction<Token>) {
      state.accessToken = token;
    },
    setUser(state, { payload: user }: PayloadAction<User>) {
      state.user = user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutActionCreator, () => initialState)
      .addCase(setTokensActionCreator, (state, { payload: tokens }) => {
        state.accessToken = tokens.accessToken;
      });
  },
  /* eslint-enable no-param-reassign */
});

const nonSecurePersistReducerName = nonSecurePersistSlice.name;

const nonSecurePersistConfig = {
  key: nonSecurePersistReducerName,
  storage: AsyncStorage,
};

const nonSecurePersistReducer = persistReducer(
  nonSecurePersistConfig,
  nonSecurePersistSlice.reducer,
);


/**
 * Secure persist part of auth (persist with SecureStorage based on expo-secure-store).
 */

type SecurePersistInitialState = {
  refreshToken: Token | null,
};

const securePersistInitialState: SecurePersistInitialState = {
  refreshToken: null,
};


const securePersistSlice = createSlice({
  name: 'securePersist',
  initialState: securePersistInitialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setRefreshToken(state, { payload: token }: PayloadAction<Token>) {
      state.refreshToken = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutActionCreator, () => securePersistInitialState)
      .addCase(setTokensActionCreator, (state, { payload: tokens }) => {
        state.refreshToken = tokens.refreshToken;
      });
  },
  /* eslint-enable no-param-reassign */
});

const securePersistReducerName = securePersistSlice.name;

const securePersistConfig = {
  key: securePersistReducerName,
  storage: createSecureStorage(),
};

const securePersistReducer = persistReducer(securePersistConfig, securePersistSlice.reducer);


/**
 * Auth
 */
export const authReducerName = 'auth';

export default combineReducers({
  [nonSecurePersistReducerName]: nonSecurePersistReducer,
  [securePersistReducerName]: securePersistReducer,
});


export const { setAccessToken, setUser } = nonSecurePersistSlice.actions;
export const { setRefreshToken } = securePersistSlice.actions;
export const logout = logoutActionCreator;
export const setTokens = setTokensActionCreator;


export const selectAccessToken = (state: RootState) => state
  .auth[nonSecurePersistReducerName].accessToken;
export const isAuth = (state: RootState) => Boolean(
  state.auth[nonSecurePersistReducerName].user,
);
export const selectRefreshToken = (state: RootState) => state
  .auth[securePersistReducerName].refreshToken;
