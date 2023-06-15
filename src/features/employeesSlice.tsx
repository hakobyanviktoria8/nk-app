import { createSlice } from "@reduxjs/toolkit";
import { EmployeeType } from "../pages/Employees";

interface EmployeesSlice {
  value: EmployeeType[];
}

const initialState: EmployeesSlice = {
  value: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.value = action.payload;
    },
    addEmployee: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteEmployee: (state, action) => {
      const employeeId = action.payload;
      state.value = state.value.filter(
        (employee) => employee.id !== employeeId
      );
    },
  },
});

export const { setEmployees, addEmployee, deleteEmployee } =
  employeesSlice.actions;

export default employeesSlice.reducer;
