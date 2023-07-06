import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const maxId =
        Object.keys(state).length > 0 ? Math.max(...Object.keys(state)) + 1 : 1;
      const newTodo = { name: action.payload, done: false };
      state[maxId] = newTodo;
    },
    remove: (state) => {
      const newList = {};
      Object.entries({ ...state }).forEach(([id, { name, done }]) => {
        if (!done) newList[id] = { name, done };
      });
      return newList;
    },
    checkOne: (state, action) => {
      state[action.payload].done = !state[action.payload].done;
    },
    checkAll: (state, action) => {
      Object.entries({ ...state }).forEach(([id, { name }]) => {
        state[id].done = action.payload;
      });
    },
  },
});

export const { add, remove, checkOne, checkAll } = todoSlice.actions;

export default todoSlice.reducer;
