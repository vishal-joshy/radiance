import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './general/generalSlice';
import videoReducer from './video/videoSlice';
import audioReducer from './audio/audioSlice';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    video: videoReducer,
    audio: audioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
