import React from "react";
import { AppBar } from "@material-ui/core/";
import { makeStyles } from "react";
import "./App.css";
import { Toolbar } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar style={{ background: "#8c77e6" }}>
        <Toolbar></Toolbar>
      </AppBar>
      <div className="purple">Hey</div>
    </div>
  );
}

export default App;
