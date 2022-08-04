import React from "react";
import { Link } from "react-router-dom";

import "../styles/navigation.css";

const Navigation = () => (
  <div className="navigation">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Navigation;
