import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../../features/postSlice";
import { FaTrash, FaThumbsUp, FaThumbsDown, FaEdit } from "react-icons/fa";

const PostList = ({ setEditPost }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const filteredPosts = posts.filter((post) => {
    const textMatch = post.text.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = post.category?.toLowerCase().includes(searchTerm.toLowerCase());
    const tagsMatch = post.tags?.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const postDate = new Date(post.createdAt);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const dateMatch =
      (!start || postDate >= start) && (!end || postDate <= end);

    return (textMatch || categoryMatch || tagsMatch) && dateMatch;
  });

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Posts</h2>

      {/* 🔍 Search Filter */}
      <input
        type="text"
        placeholder="Search by keyword..."
        className="border px-2 py-1 mr-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 📅 Date Filter */}
      <input
        type="date"
        className="border px-2 py-1 mr-2"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        className="border px-2 py-1"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      {filteredPosts.length === 0 && (
        <p className="mt-4 text-gray-500">No posts found.</p>
      )}

      {filteredPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 shadow rounded my-2 flex flex-col gap-2"
        >
          <p>{post.text}</p>
          {post.category && <p className="text-sm">Category: {post.category}</p>}
          {post.tags?.length > 0 && (
            <div className="text-sm">
              Tags:{" "}
              {post.tags.map((tag, i) => (
                <span key={i} className="mr-1 text-blue-600">#{tag}</span>
              ))}
            </div>
          )}
          <p className="text-xs text-gray-500">
            Posted on: {new Date(post.createdAt).toLocaleString()}
          </p>

          {/* Icons */}
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => setEditPost(post)}
              className="text-blue-500"
              title="Edit"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-500"
              title="Delete"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
