import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>PostView</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {posts &&
        posts.map((post, index) => {
          return (
            <div key={index}>
              <h2>{post.title}</h2>
              <h5>{post.body}</h5>
            </div>
          );
        })}
    </div>
  );
};

export default PostView;
