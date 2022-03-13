import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralSlice {
  main: any;
  misc: any;
  doubleSlider: any;
}

const initialState: GeneralSlice = {
  main: {},
  misc: {},
  doubleSlider: {},
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGeneral: (state, action: PayloadAction<null | any>) => {
      state.main = { ...state.main, ...action.payload };
    },
    removeFromGeneral: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.main };
      delete result[key];
      state.main = result;
    },
    setGeneralMisc: (state, action: PayloadAction<null | any>) => {
      state.misc = { ...state.misc, ...action.payload };
    },
    removeFromGeneralMisc: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.misc };
      delete result[key];
      state.misc = result;
    },
    setGeneralDoubleSlider: (state, action: PayloadAction<null | any>) => {
      state.doubleSlider = { ...state.doubleSlider, ...action.payload };
    },
    removeFromGeneralDoubleSlider: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.doubleSlider };
      delete result[key];
      state.doubleSlider = result;
    },
  },
});

export const { setGeneral, removeFromGeneral, setGeneralMisc, removeFromGeneralMisc,setGeneralDoubleSlider,removeFromGeneralDoubleSlider } =
  generalSlice.actions;

export default generalSlice.reducer;
