import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";
import powergoats from "./powergoats.json";
import PowerGoatCard, { PowerGoatCardProps } from "./components/PowerGoatCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <ul>
          {powergoats.map((record, i) => (
            <li key={i}>
              {record.id} - {record.name} {record.skill}
              {record.story}
            </li>
          ))}
        </ul>
      </div>

      <Typography>Here are our greatest Power Goats:</Typography>
      <PowerGoatCard {...cardProps} />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
