import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VideoSlice {
  main:any;
  misc:any;
}

const initialState: VideoSlice = {
  main:{},
  misc:{}
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<null | any>) => {
      state.main = { ...state.main, ...action.payload };
    },
    removeFromVideo: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.main };
      delete result[key];
      state.main = result;
    },
  },
});

export const { setVideo, removeFromVideo } = videoSlice.actions;

export default videoSlice.reducer;
