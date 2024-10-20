import axios from "axios";
import React, { useReducer } from "react";
import { initialState, postReducer } from "./useReducer";

const Post = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const handleFetch = () => {
    dispatch({ type: "FETCH_START" });
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_SUCCESS", payload: res });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };
  console.log(state.post.data);
  return (
    <div>
      <h1>UseReducer</h1>
      <div>
        <button onClick={handleFetch}>
          <p>{state.loading ? "Wait..." : "Fetch the post"}</p>
        </button>
        {state &&
          state.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.data.title}</h2>
              </div>
            );
          })}
        <span>{state.error && "Something went wrong!"}</span>
      </div>
    </div>
  );
};

export default Post;
