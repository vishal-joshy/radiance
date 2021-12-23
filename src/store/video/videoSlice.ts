import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VideoSlice {
  data: any;
}

const initialState: VideoSlice = {
  data: {},
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<null | any>) => {
      state.data = { ...state.data, ...action.payload };
    },
    removeFromVideo: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.data };
      delete result[key];
      state.data = result;
    },
  },
});

export const { setVideo, removeFromVideo } = videoSlice.actions;

export default videoSlice.reducer;
