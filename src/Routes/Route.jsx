import React from "react";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "../Pages/Home/Home";
import Results from "../Pages/Results/Results";
import Error from "../Pages/Error/Error";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:name/:page" element={<Results />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
