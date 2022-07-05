import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Button } from "./ui/components/button/Button";
import { NavigationBar } from "./ui/layout/header/NavigationBar";
import MetroNavBar from "./ui/layout/header/MetroNavBar";
function App() {
  return (
    <>
      <Router>
        {/* <NavigationBar /> */}

        <MetroNavBar />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
