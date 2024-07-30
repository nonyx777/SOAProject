import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ArtAuction from "./ArtAuction";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 style={{ marginLeft: "25px" }}>Art Auction</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px 0",
        }}
      >
        <ArtAuction />
        <ArtAuction />
        <ArtAuction />
        <ArtAuction />
        <ArtAuction />
        <ArtAuction />
        <ArtAuction />
      </div>
    </div>
  );
};

export default Main;
