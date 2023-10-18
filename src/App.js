import logo from "./nathan.jpeg";
import hamster from "./a.gif";
import baby from "./baby.gif";
import "./App.css";

import Konami from "react-konami-code";
import { useState } from "react";

function App() {
  const [cursed, setCursed] = useState(false);
  const easterEgg = () => {
    setCursed((state) => !state);
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ zIndex: 10, position: "realtive" }}
      >
        <a
          href="https://www.babylist.com/list/genagonzalesnathangreenberg"
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "relative", zIndex: 2, textDecoration: "none" }}
        >
          {cursed ? (
            <img src={baby} className="App-logo" alt="logo" />
          ) : (
            <img src={logo} className="App-logo" alt="logo" />
          )}
          <h1 style={{ color: "black", fontWeight: "" }}>
            Gena and Nathan Are Having a Baby!
          </h1>
          <h3
            className="App-link"
            href="https://www.babylist.com/list/genagonzalesnathangreenberg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "20px",
            }}
          >
            Go to the baby registry! <span>👶</span>
          </h3>
        </a>
        {cursed && (
          <div
            src={hamster}
            alt=""
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100vw",
              height: "100vh",
              zIndex: 0,
              background: "url(" + hamster + ")",
            }}
          />
        )}
      </header>
      <Konami action={easterEgg} />
    </div>
  );
}

export default App;
