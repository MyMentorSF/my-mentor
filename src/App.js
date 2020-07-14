import React from "react";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core";
import "./App.css";

import ApplicationBar from "./Components/ApplicationBar";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f2e7d5",
    height: "100vh",
    width: "100vw",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ApplicationBar />
    </div>
  );
}

export default App;
