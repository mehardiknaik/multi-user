import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useStrapiData } from "../providers/StrapiProvider";

const clients = import.meta.env.VITE_APP_NAME;
const Homepage = () => {
  const [count, setCount] = useState(0);
  const { client } = useStrapiData();

  return (
    <div>
      <div>
        <img
          src={`/logo/${clients}.svg`}
          className="logo client"
          alt="Vite logo"
        />
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>{clients} + Vite + React</h1>
      <h3>{client}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Homepage;
