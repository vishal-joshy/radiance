import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AudioSlice {
  main: any;
}

const initialState: AudioSlice = {
  main: {},
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setAudio: (state, action: PayloadAction<null | any>) => {
      state.main = { ...state.main, ...action.payload };
    },
    removeFromAudio: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.main };
      delete result[key];
      state.main = result;
    },
  },
});

export const { setAudio, removeFromAudio } = audioSlice.actions;

export default audioSlice.reducer;
