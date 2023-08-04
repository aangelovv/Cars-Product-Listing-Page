import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Cars from "./components/Cars/Cars";
import Vans from "./components/Vans/Vans";
import Motorcycles from "./components/Motorcycles/Motorcycles";
import OtherVehicles from "./components/OtherVehicles/OtherVehicles";

import "./App.css";


function NotFound() {
  return <h1>404 Not Found</h1>;
}


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Cars />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
        <Route path="/other-vehicles" element={<OtherVehicles />} />
      </Routes>
    </Router>
  );
};

export default App;
