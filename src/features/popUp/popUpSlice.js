import { createSlice } from '@reduxjs/toolkit';

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState: {
    type: 'exit',
    toggle: false
  },
  reducers: {
    setPopUpType: (state, action) => {
      state.type = action.payload;
      state.toggle = true;
    },
    hidePopUp: (state) => {
      state.toggle = false;
    }
  }
});

export const { setPopUpType, hidePopUp } = popUpSlice.actions;
export const selectPopUpType = (state) => state.popUp.type;
export const selectPopUpToggle = (state) => state.popUp.toggle;

export default popUpSlice.reducer;