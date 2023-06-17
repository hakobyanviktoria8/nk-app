import { configureStore } from "@reduxjs/toolkit";
import isOpenModalReducer from "./features/isOpenModalSlice";
import employeesReducer from "./features/employeesSlice";
import tasksReducer from "./features/tasksSlice";

const store = configureStore({
  reducer: {
    isOpenModal: isOpenModalReducer,
    employees: employeesReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
