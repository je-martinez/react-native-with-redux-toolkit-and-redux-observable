import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const makeStore = () =>
  configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
    },
    devTools: true,
  });

export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
