import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralSlice {
  main: any;
  misc: any;
}

const initialState: GeneralSlice = {
  main: {},
  misc: {},
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
  },
});

export const { setGeneral, removeFromGeneral, setGeneralMisc, removeFromGeneralMisc } =
  generalSlice.actions;

export default generalSlice.reducer;
