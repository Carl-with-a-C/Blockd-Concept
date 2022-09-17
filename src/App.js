import React from "react";
import Navbar from "./components/Navbar/Navbar";
import astronaut from "./components/images/astronaut.png";
import jaDice from "./components/images/JaDice.png";
import cloud from "./components/images/PurpleCloud.png";
import dog from "./components/images/dog.png";
import boot from "./components/images/boot.png";
import car from "./components/images/car.png";
import david from "./components/images/david.png";
import monkey from "./components/images/monkey.png";
import vegBottle from "./components/images/veggie bottle.png";
import NumberOne from "./components/NumberSVG";

const App = () => {
  return (
    <div className="App">
      <div className="wholeContainer">
        <div className="astro-container">
          <img
            className="astronaut"
            src={astronaut}
            alt="this is an astronaut"
          ></img>
        </div>
        <header className="heroContainer">
          <div className="heading-container">
            <h1>
              where we do design{" "}
              <strong className="diffStyle">differently</strong>
            </h1>
          </div>
          <div className="hero-img-container"></div>
          <button className="in-touch-btn">get in touch</button>
          <img
            className="jaDice"
            src={jaDice}
            alt="this is a smiley yellow dice"
          ></img>
          <img
            className="pCloud"
            src={cloud}
            alt="this is a purple cloud"
          ></img>
          <img className="dog" src={dog} alt="this is a metal dog"></img>
          <img className="boot" src={boot} alt="this is a metal boot"></img>
          <img className="car" src={car} alt="this is a metal car"></img>
        </header>
        <Navbar />
        <div className="card-container">
          <div className="our-services">
            <h2>OUR SERVICES</h2>
            <img
              className="david"
              src={david}
              alt="this is a michaelangelo's david"
            ></img>
          </div>
          <div className="lets-talk">
            <h2 className="lets">LET'S TALK</h2>
            <div className="img-monk">
              <img
                className="monkey"
                src={monkey}
                alt="this is a cheeky monkey"
              ></img>
              <div className="team-container">
                <h3 className="welcome">
                  welcome to our small team of dedicated web developers
                </h3>
                <>
                  <a className="ww-us" href="">
                    work with us
                  </a>
                </>
              </div>
            </div>
          </div>
          <div className="our-work">
            <h2>OUR WORK</h2>
            <NumberOne />
            <img
              className="vegBottle"
              src={vegBottle}
              alt="this is a supplements bottle"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
