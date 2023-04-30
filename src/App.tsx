import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useConsole from "./hooks/useConsole";
import useRemoveLoader from "./hooks/useRemoveLoader";

const client = import.meta.env.VITE_APP_NAME;
function App() {
  const [count, setCount] = useState(0);
  useConsole()
  useRemoveLoader()

  console.log(import.meta.env);

  return (
    <>
      <div>
        <img
          src={`/logo/${client}.svg`}
          className="logo client"
          alt="Vite logo"
        />
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>{client} + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
