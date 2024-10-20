import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./TodoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const numberOfTodo = useSelector((state) => state.todoReducer.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: numberOfTodo + 1, title, description };
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <br />
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
