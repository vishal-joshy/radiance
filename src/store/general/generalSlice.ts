import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralSlice {
  data: any;
}

const initialState: GeneralSlice = {
  data: {},
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGeneral: (state, action: PayloadAction<null | any>) => {
      state.data = { ...state.data, ...action.payload };
    },
    removeFromGeneral: (state, action: PayloadAction<null | any>) => {
      const key = action.payload;
      const result = { ...state.data };
      delete result[key];
      state.data = result;
    },
  },
});

export const { setGeneral, removeFromGeneral } = generalSlice.actions;

export default generalSlice.reducer;
