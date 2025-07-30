import React from "react";
import { useSelector } from "react-redux";

function PostList({ setEditPost }) {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-3 mb-3 rounded shadow flex justify-between items-center"
          >
            <p>{post.text}</p>
            <button
              onClick={() => setEditPost(post)}
              className="text-sm text-blue-600"
            >
              Edit
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
