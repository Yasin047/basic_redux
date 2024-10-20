import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterApp/counterSlice";
import postReducer from "../features/postSlice/postSlice";
import todoReducer from "../features/todoSlice/TodoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    todoReducer: todoReducer,
  },
});

export default store;
