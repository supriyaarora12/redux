import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost} from "../../../features/postSlice"

function PostForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addPost(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a post..."
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}

export default PostForm;
