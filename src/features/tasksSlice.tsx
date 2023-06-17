import { createSlice } from "@reduxjs/toolkit";

export interface TaskState {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  employeeId: string;
}

interface TasksSlice {
  value: TaskState[];
}

const initialState: TasksSlice = {
  value: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.value = action.payload;
    },
    addTask: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.value = state.value.filter((t) => t.id !== taskId);
    },
  },
});

export const { getTasks, addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
