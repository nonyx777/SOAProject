import { IconHome, IconPodium, IconSearch } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="links">
          <div className="link">
            <IconHome style={{ cursor: "pointer", color: "008AF7" }} onClick={() => navigate("/")} />
          </div>
          <div className="link">
            <IconPodium style={{ cursor: "pointer", color: "008AF7" }} onClick={() => navigate("/admin")} />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
