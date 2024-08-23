"use client";
import React from "react";
import {
  increment,
  decrement,
  useAppDispatch,
  useAppSelector,
  incrementByAmount,
} from "@/lib/redux";

const Page = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="p-10 flex gap-8">
      <button onClick={handleDecrement}>-</button> {value}
      <button onClick={handleIncrement}>+</button>
      <input
        type="text"
        className="border-gray-500 border outline-none py-1 px-2"
        onChange={(e) => {
          const value = +e.target.value;

          if (typeof value === "number" && !isNaN(value))
            dispatch(incrementByAmount(value));
        }}
      />
    </div>
  );
};

export default Page;
