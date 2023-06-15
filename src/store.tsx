import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import isOpenModalReducer from "./features/isOpenModalSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isOpenModal: isOpenModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
