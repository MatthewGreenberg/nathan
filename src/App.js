import logo from "./nathan.jpg";
import hamster from "./a.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ zIndex: 10, position: "realtive" }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <a
            className="App-link"
            href="https://www.babylist.com/list/genagonzalesnathangreenberg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "20px",
              background: "red",
              boxShadow: "20px 20px 20px red",
            }}
          >
            Go to the baby registry! <span>👶</span>
          </a>
        </div>
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
      </header>
    </div>
  );
}

export default App;
