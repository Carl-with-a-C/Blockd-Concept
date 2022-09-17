import React, { useState } from "react";
import "./Hamburger.css";

const Hamburger = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="HamContainer">
      <button
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className="nav-btn"
        aria-label="toggle navigation"
      >
        <svg
          className="hamburger-svg"
          width="110"
          height="110"
          viewBox="1 1 108 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.616943"
            y="0.544403"
            width="108.766"
            height="108.766"
            fill="black"
          />
          <rect
            x="0.616943"
            y="0.544403"
            width="108.766"
            height="108.766"
            rx="7.89557"
            fill="#FFE869"
          />
          <rect
            x="0.616943"
            y="0.544403"
            width="108.766"
            height="54.3831"
            rx="7.89557"
            fill="#FDDA48"
          />
          <rect
            x="14.5511"
            y="22.5173"
            width="80.8977"
            height="17.8686"
            fill="black"
          />
          <rect
            x="14.5511"
            y="45.9932"
            width="80.8977"
            height="17.8686"
            fill="black"
          />
          <rect
            x="14.5511"
            y="69.4691"
            width="80.8977"
            height="17.8686"
            fill="black"
          />
        </svg>
        {onHover && (
          <div className="hamburger-svg-hover">
            <svg
              className="hamburger-svg"
              width="110"
              height="110"
              viewBox="1 1 108 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.616943"
                y="0.544403"
                width="108.766"
                height="108.766"
                fill="black"
              />
              <rect
                x="0.616943"
                y="0.544403"
                width="108.766"
                height="108.766"
                rx="7.89557"
                fill="#FFE869"
              />
              <rect
                x="0.616943"
                y="0.544403"
                width="108.766"
                height="54.3831"
                rx="7.89557"
                fill="#FDDA48"
              />
              <rect
                x="14.5511"
                y="22.5173"
                width="80.8977"
                height="17.8686"
                fill="#00fedc"
              />
              <rect
                x="14.5511"
                y="45.9932"
                width="80.8977"
                height="17.8686"
                fill="#00fedc"
              />
              <rect
                x="14.5511"
                y="69.4691"
                width="80.8977"
                height="17.8686"
                fill="#00fedc"
              />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default Hamburger;
