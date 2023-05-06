import { configureStore } from "@reduxjs/toolkit";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import reducers from './reducers';
import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store: ToolkitStore = configureStore({
  reducer: combineReducers(reducers),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector