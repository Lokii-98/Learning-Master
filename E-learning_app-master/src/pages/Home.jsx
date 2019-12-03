import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeStyles.css";
import Home_bg from "../assets/home_bg.mp4";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <video autoPlay loop muted playsInline className="home-vd-classRoom">
          <source src={Home_bg} type="video/mp4" />
        </video>
        <div className="bg-dark-theme"></div>
        <div className="home-container">
          <div className="section1">
            <button className="btn btn-success btn-video-route">
              <Link to="/video">Take a Video Course</Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}
