import React from "react";
import { useStore } from "./Store";

function CounterComponent() {
  const [newColor, setNewColor] = React.useState("");
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
    colors,
    addColor,
    removeColor,
  } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name :" ,name);
    console.log("Email :" ,email);
    resetForm();
  };

  const handleAddColor = () => {
    addColor(newColor);
    setNewColor("");
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

        <div className="flex gap-4">
          {theme === "light" ? (
            <div className="w-screen h-12 bg-white text-center">Light</div>
          ) : (
            <div className="bg-black w-screen h-12 text-white text-center">
              Dark
            </div>
          )}
          <button
            className="p-2 bg-slate-300 rounded-xl"
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

          <div>
      <ul>
        <h1 className="text-lg font-semibold my-4">Favorite Colors ↓</h1>
        {colors.map((color, index) => (
          <li key={index}>
            {color}{' '}
            <button onClick={() => removeColor(color)} className="bg-red-600 p-1 rounded-md my-2">Remove</button>
          </li>
        ))}
      </ul>
      <input
      placeholder="Add a color"
        className="border-b-2 border-black active:outline-none focus:outline-none tracking-wider px-1"
        type="text"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button onClick={handleAddColor} className="bg-green-400 p-1 rounded-md mx-4">Add Color</button>
          </div>

    </div>
  );
}

export default CounterComponent;
