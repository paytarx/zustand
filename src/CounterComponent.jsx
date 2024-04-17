import React from "react";
import { useStore } from "./Store";

function CounterComponent() {
  const { count, up, down, reset } = useStore();

  return (
    <div>
      <h1 className="m-4 font-medium text-lg">Count: {count}</h1>
      <button className="p-2 bg-slate-300 rounded-xl mx-2" onClick={up}>Increment</button>
      <button className="p-2 bg-slate-300 rounded-xl mx-2" onClick={down}>Decrement</button>
      <button className="p-2 bg-slate-300 rounded-xl mx-2" onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
