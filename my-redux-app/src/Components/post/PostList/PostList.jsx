
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../features/postSlice";

function PostList({ setEditPost }) {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">All Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 rounded shadow mb-3 flex justify-between items-center"
        >
          <p className="text-gray-800">{post.text}</p>
          <div>
            <button
              className="text-blue-500 mr-3"
              onClick={() => setEditPost(post)}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
