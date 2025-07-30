// src/Components/CounterHeader.jsx
import React from "react";

function CounterHeader({ count }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Counter App</h1>
      <p className="text-2xl font-medium mb-6">Count: {count}</p>
    </div>
  );
}

export default CounterHeader;
