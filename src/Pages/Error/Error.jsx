import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import ErrorImg from "../../Assets/Error-img.png.webp";

const Error = () => {
  return (
    <div className="error_container">
      <div className="content">
        <div className="error_logo">
          <h1>4</h1>
          <img src={ErrorImg} alt="Error_img" />
          <h1>4</h1>
        </div>
        <Link to={"/"}>
          <button type="button" className="button">
            GET ME HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
