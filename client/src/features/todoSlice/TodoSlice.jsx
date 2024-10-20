import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
  todo: [{ id: 1, title: "HELLO", description: "HI" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodo,
  reducers: {
    showTodo: (state) => state,
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todo = state.todo.filter((item) => item.id !== id);
    },
  },
});

export const { showTodo, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
