import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import baner from "../Assets/baner.png"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            GET INTO DREAME COLLEGE
          </h1>
          <p className="primary-text">
            Affordable SAT, ACT, PSAT And AP Test Prep That Raises Test Scores.
          </p>
          <button className="secondary-button">
            Book Free Session <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={baner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
