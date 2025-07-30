import React from "react";
import { useSelector } from "react-redux";

function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li
          key={post.id}
          className="bg-white p-3 border rounded shadow-sm text-gray-700"
        >
          {post.text}
        </li>
      ))}
    </ul>
  );
}

export default PostList;
