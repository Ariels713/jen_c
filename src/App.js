import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import MainHeader from "./components/header/MainHeader";

function App() {
  return (
    <>
      <Navigation />
      <MainHeader />
    </>
  );
}

export default App;
