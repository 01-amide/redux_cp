import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.list.find((item) => item.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, desc } = action.payload;
      const task = state.list.find((item) => item.id === id);
      if (task) {
        task.description = desc;
      }
    },
  },
});

export const { addTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
