import React, { useState, useEffect } from "react";
import { useDispatch,  } from "react-redux";
import { addPost, updatePost } from "../../../features/postSlice";

function PostForm({ editPost, setEditPost }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editPost) {
      setText(editPost.text);
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPost) {
      dispatch(updatePost({ id: editPost.id, text }));
      setEditPost(null); // Exit edit mode
    } else {
      dispatch(addPost(text));
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l"
        placeholder="Enter your post..."
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        {editPost ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default PostForm;
