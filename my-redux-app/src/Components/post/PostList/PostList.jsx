
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, toggleLike } from "../../../features/postSlice";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

function PostList({ setEditPost }) {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4 mt-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded p-4 flex justify-between items-center"
        >
          <div className="flex-1">
            <p className="text-lg">{post.text}</p>
          </div>

          <div className="flex items-center gap-3 ml-4">
            
            <button
              onClick={() => dispatch(toggleLike(post.id))}
              className="text-blue-500 hover:text-blue-700"
              title={post.liked ? "Unlike" : "Like"}
            >
              {post.liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </button>

            <button
              onClick={() => setEditPost(post)}
              className="text-green-500 hover:text-green-700"
              title="Edit"
            >
              <FaEdit />
            </button>

           
            <button
              onClick={() => dispatch(deletePost(post.id))}
              className="text-red-500 hover:text-red-700"
              title="Delete"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
