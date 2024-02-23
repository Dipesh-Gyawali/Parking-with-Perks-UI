import { useState } from "react";
import "./_header.scss";

export const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className="header-container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Product</a>
        </li>
        {!auth && (
          <li>
            <a href="/">Log in</a>
          </li>
        )}
      </ul>
    </div>
  );
};
