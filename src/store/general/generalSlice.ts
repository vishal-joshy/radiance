import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralSlice {
  priority: null | string;
}

const initialState: GeneralSlice = {
  priority: null,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGeneral: (state, action: PayloadAction<null | string>) => {
      state.priority = action.payload;
    },
  },
});

export const { setGeneral } = generalSlice.actions;

export default generalSlice.reducer;
