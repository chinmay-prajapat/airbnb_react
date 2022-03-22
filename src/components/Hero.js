import React from "react";
const Hero = () => {
  return (
    <div className="hero">
      <div className="pictures">
        <div className="first-column">
          <img
            src="https://source.unsplash.com/collection/19"
            alt=""
            className="hero-img"
          />
        </div>

        <div className="second-column">
          <div className="second-col-1">
            <img
              src="https://source.unsplash.com/collection/20"
              alt=""
              className="hero-img"
            />
          </div>
          <div className="second-col-2">
            <img
              src="https://source.unsplash.com/collection/21"
              alt=""
              className="hero-img"
            />
          </div>
        </div>
        <div className="third-column">
          <div className="third-col-1">
            <img
              src="https://source.unsplash.com/collection/22"
              alt=""
              className="hero-img"
            />
          </div>
          <div className="third-col-2">
            <img
              src="https://source.unsplash.com/collection/23"
              alt=""
              className="hero-img"
            />
          </div>
        </div>
        <div className="fourth-column">
          <div className="fourth-col-1">
            <img
              src="https://source.unsplash.com/collection/24"
              alt=""
              className="hero-img"
            />
          </div>
          <div className="fourth-col-2">
            <img
              src="https://source.unsplash.com/collection/25"
              alt=""
              className="hero-img"
            />
          </div>
        </div>
        <div className="fifth-column">
          <div className="fifth-col-1">
            <img
              src="https://source.unsplash.com/collection/26"
              alt=""
              className="hero-img"
            />
          </div>
          <div className="fifth-col-2">
            <img
              src="https://source.unsplash.com/collection/27"
              alt=""
              className="hero-img"
            />
          </div>
        </div>
      </div>

      <div className="text">
        <div className="text-div">
          <div>
            <h1>Online Experience</h1>
          </div>
          <div>
            <p>
              Join unique interactive activities led by one-of-a-kind hosts-all
              without leaving home.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
