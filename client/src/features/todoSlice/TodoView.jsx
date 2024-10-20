import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import { deleteTodo } from "./TodoSlice";

const TodoView = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoReducer.todo);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>TodoView</h1>
      <AddTodo />
      {todo &&
        todo.map((item) => {
          const { id, title, description } = item;
          return (
            <div
              key={id}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <p>{id}</p>
              <p>{title}</p>
              <p>{description}</p>
              <button>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoView;
