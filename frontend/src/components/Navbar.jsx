import { IconHome, IconPodium, IconSearch } from "@tabler/icons-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="links">
          <div className="link">
            <IconHome style={{ cursor: "pointer", color: "008AF7" }} />
          </div>
          <div className="link">
            <IconPodium style={{ cursor: "pointer", color: "008AF7" }} />
          </div>
      </div>
      <div className="search">
        <IconSearch style={{ cursor: "pointer", color: "008AF7" }} />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="browse-btn">
       <a className="btn">Browse</a>
      </div>
    </div>
  );
};

export default Navbar;
