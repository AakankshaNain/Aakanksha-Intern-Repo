import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="font-bold"> Count: {count}</h1>
      <button
        className="bg-blue-900 text-white py-2 px-5 rounded-md text-center"
        onClick={() => dispatch(increment())}
      >
        Counter
      </button>
    </div>
  );
};

export default Counter;
