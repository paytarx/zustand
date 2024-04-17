import React from "react";
import { useStore } from "./Store";

function CounterComponent() {
  const {
    count,
    up,
    down,
    reset,
    theme,
    toggleTheme,
    name,
    email,
    setName,
    setEmail,
    resetForm,
  } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name :" ,name);
    console.log("Email :" ,email);
    resetForm();
  };

  return (
    <div>
      <div>
        <h1 className="m-4 font-medium text-lg">Count: {count}</h1>
        <button className="p-2 bg-slate-300 rounded-xl mx-2" onClick={up}>
          Increment
        </button>
        <button className="p-2 bg-slate-300 rounded-xl mx-2" onClick={down}>
          Decrement
        </button>
        <button className="p-2 bg-slate-300 rounded-xl mx-2" onClick={reset}>
          Reset
        </button>
      </div>

      <div>
        <h1 className="text-lg my-6 mx-4">Current Theme : {theme} </h1>
        <div className="flex gap-20">
          {theme === "light" ? (
            <div className="w-20 h-20 bg-white text-center">Light</div>
          ) : (
            <div className="w-20 h-20 bg-black text-white text-center">
              Dark
            </div>
          )}
          <button
            className="p-2 w-24 h-16 bg-slate-300 rounded-xl"
            onClick={toggleTheme}
          >
            Toggle Theme
          </button>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name :{" "}
            <input
            placeholder="Your name"
            className="border-b-2 border-black active:outline-none focus:outline-none tracking-wider px-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>{" "}
          </label>

          <label>
            Email :{" "}
            <input
            placeholder="Your email address"
            className="border-b-2 border-black active:outline-none tracking-wider focus:outline-none px-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>{" "}
          </label>
          <button className="p-2 bg-slate-300 rounded-xl" type="submit">
            Submit </button>

        </form>
      </div>

  

    </div>
  );
}

export default CounterComponent;
