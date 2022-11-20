import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginFrom, Nav, Register } from "./component";
const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<LoginFrom />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
