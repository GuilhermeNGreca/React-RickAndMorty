import React from "react";
import "./App.css";
import RouterApp from "./Routes/Route";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <RouterApp />
      <ToastContainer />
    </>
  );
};

export default App;
