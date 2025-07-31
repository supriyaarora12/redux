import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../../../features/postSlice";

function PostForm({ editPost, setEditPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
      setCategory(editPost.category || "");
      setTags(editPost.tags?.join(", ") || "");
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      id: editPost?.id || Date.now(),
      title,
      content,
      category,
      tags: tags.split(",").map(tag => tag.trim()),
    };

    if (editPost) {
      dispatch(updatePost(postData));
    } else {
      dispatch(addPost(postData));
    }

    setTitle("");
    setContent("");
    setCategory("");
    setTags("");
    setEditPost(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border p-2"
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full border p-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editPost ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
}

export default PostForm;
