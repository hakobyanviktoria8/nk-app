import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

const isOpenModalSlice = createSlice({
  name: "isOpenModal",
  initialState,
  reducers: {
    openModal(state) {
      state.value = true;
    },
    closeModal(state) {
      state.value = false;
    },
  },
});


export const { openModal, closeModal } = isOpenModalSlice.actions;

export default isOpenModalSlice.reducer;