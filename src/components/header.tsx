import "./_header.scss";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        console.log(user, "axxxxxxxxxxxxxxx");
      } else {
        setIsAuth(false);
        console.log(user, "bxxxxxxxxxxxxxxx");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuth(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  // function handleLogin() {
  //   signInWithPopup(auth, provider).then((result) => {
  //     console.log(result);
  //     isSetAuth(true);
  //     navigate("/parkingslot"); // Navigate to the desired URL
  //   });
  // }
  // function handleLogout() {
  //   signOut(auth);
  //   setIsAuth(false);
  //   navigate("/"); // Navigate to the desired URL
  // }

  return (
    <div className="header-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isAuth && (
        <li>
          <Link to="/parkingslot">Parking Slots</Link>
        </li>
         )} 
        {/* {!isAuth && location.pathname !== "/register" && ( */}
        {!isAuth && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {/* )} */}
        {isAuth && (
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        )}
        {/* {!isAuth && location.pathname !== "/login" && ( */}
        {!isAuth && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {/* )} */}
      </ul>
    </div>
  );
};
