import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ArtAuction from "./ArtAuction";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 style={{ marginLeft: "25px" }}>Art Gallery</h1>

      <ArtAuction />
    </div>
  );
};

export default Main;