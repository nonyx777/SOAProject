import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img src="/inner.png" alt="" className="hero-img" />
      </div>

      <div className="hero-right">
        <h1>
          <span>Discover</span>, <span>Collect</span> and <br></br><span>Sell</span> Your{" "}
          <span>Arts!</span>
        </h1>
        <div className="btn-action">
          <a className="browse-btn">Browse</a>
          <a className="sell-btn">Sell</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
