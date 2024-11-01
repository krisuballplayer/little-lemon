import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>
    </div>
  );
}

export default App;
