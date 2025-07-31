import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../../../features/postSlice";

function PostForm({ editPost, setEditPost }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (editPost) {
      setText(editPost.text);
      setCategory(editPost.category || "");
      setTagsInput(editPost.tags ? editPost.tags.join(", ") : "");
    } else {
      setText("");
      setCategory("");
      setTagsInput("");
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (editPost) {
      dispatch(
        updatePost({
          id: editPost.id,
          text,
          category,
          tags,
        })
      );
      setEditPost(null);
    } else {
      dispatch(
        addPost({
          text,
          category,
          tags,
        })
      );
    }

    setText("");
    setCategory("");
    setTagsInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">
        {editPost ? "Edit Post" : "Add New Post"}
      </h2>

      <textarea
        className="w-full border p-2 mb-2"
        placeholder="Write your post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <input
        type="text"
        className="w-full border p-2 mb-2"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        className="w-full border p-2 mb-2"
        placeholder="Tags (comma-separated)"
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {editPost ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
}

export default PostForm;
