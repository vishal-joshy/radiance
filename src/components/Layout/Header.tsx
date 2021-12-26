import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Header({}: Props): ReactElement {
  const logo = "RADIANCE";
  return (
    <div>
      <h1>{logo}</h1>
      <nav>
        <Link to="/">General</Link>
        <Link to="/video">Video</Link>
      </nav>
    </div>
  );
}

export default Header;
