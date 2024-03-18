import React, { useEffect } from "react";
import "./LoadingPage.css";
import LoadingImage from "../../Assets/LoadingImage.png";

const LoadingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="loading">
      <img src={LoadingImage} alt="loading_image" />
      <h2>Loading</h2>
    </div>
  );
};

export default LoadingPage;
