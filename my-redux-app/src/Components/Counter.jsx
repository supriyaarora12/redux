import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Features/CounterSlice"
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center bg-white shadow-lg p-8 rounded max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <p className="text-3xl mb-4">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
