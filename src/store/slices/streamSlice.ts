import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StreamSlice {
  main: any;
}

const initialState: StreamSlice = {
  main: {},
};

export const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setStream: (state, action: PayloadAction<null | any>) => {
      state.main = { ...state.main, ...action.payload };
    },
    removeFromStream: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.main };
      delete result[key];
      state.main = result;
    },
  },
});

export const { setStream, removeFromStream } = streamSlice.actions;

export default streamSlice.reducer;
