import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { postsEpic } from './epics/posts.epic';
import { postsSlice } from './slices/posts.slice';

const rootEpic = combineEpics(postsEpic);
const epicMiddleware = createEpicMiddleware();

const makeStore = () =>
  configureStore({
    reducer: {
      [postsSlice.name]: postsSlice.reducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(epicMiddleware),
  });

export const store = makeStore();
epicMiddleware.run(rootEpic);
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
