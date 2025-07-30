import React from "react";
import PostForm from "./Components/post/PostForm/PostForm";
import PostList from "./Components/post/PostList/PostList";

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Blog App
      </h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
