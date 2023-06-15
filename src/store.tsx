import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import isOpenModalReducer from "./features/isOpenModalSlice";
import employeesReducer from "./features/employeesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isOpenModal: isOpenModalReducer,
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
