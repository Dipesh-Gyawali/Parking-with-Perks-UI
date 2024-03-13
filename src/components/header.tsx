import { useState } from "react";
import "./_header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className="header-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/parkingslot">Parking Slots</Link>
        </li>
        {/* {!auth && ( */}
        <li>
          <Link to="/login">Log in</Link>
        </li>
        {/* )}} */}
      </ul>
    </div>
  );
};
