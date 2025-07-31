import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost, dislikePost } from "../../../features/postSlice";
import { FaEdit, FaTrash, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function PostList({ setEditPost }) {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4 mt-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 bg-white shadow">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          {post.category && <p className="text-sm text-gray-500">Category: {post.category}</p>}
          {post.tags?.length > 0 && (
            <div className="text-sm text-gray-600">
              Tags:{" "}
              {post.tags.map((tag, i) => (
                <span key={i} className="bg-gray-200 px-2 py-1 mr-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-4 mt-2 text-blue-600">
            <button onClick={() => dispatch(likePost(post.id))} className="flex items-center gap-1">
              <FaThumbsUp /> {post.likes || 0}
            </button>
            <button onClick={() => dispatch(dislikePost(post.id))} className="flex items-center gap-1">
              <FaThumbsDown /> {post.dislikes || 0}
            </button>
            <button onClick={() => setEditPost(post)} className="flex items-center gap-1 text-green-600">
              <FaEdit /> Edit
            </button>
            <button onClick={() => dispatch(deletePost(post.id))} className="flex items-center gap-1 text-red-600">
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
