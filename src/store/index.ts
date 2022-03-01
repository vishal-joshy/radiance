import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/generalSlice';
import videoReducer from './slices/videoSlice';
import audioReducer from './slices/audioSlice';
import streamReducer from './slices/streamSlice';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    video: videoReducer,
    audio: audioReducer,
    stream: streamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
