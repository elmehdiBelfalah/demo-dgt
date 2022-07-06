import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Button } from "./ui/components/button/Button";
import { NavigationBar } from "./ui/layout/header/NavigationBar";
import Bars from "./ui/layout/Bars";
import Home from "./ui/pages/Home";
function App() {
  return (
    <>
      <Router>
        {/* <NavigationBar /> */}
        <Bars></Bars>

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
