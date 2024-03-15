import "./_login.scss";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const [isAuth, isSetAuth] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      isSetAuth(true);
      navigate("/"); // Navigate to the desired URL
    });
  }
  function handleLogout() {
    signOut(auth);
    isSetAuth(false);
  }

  return (
    <>
      <div className="login-main-container">
        <div className="login-first-container">
          <div className="img-container">
            <img src="../src/assets/logo.png" alt="logo" />
          </div>
          <p>PARK WITH PERKS</p>
        </div>

        <div className="login-second-container">
          <p>
            <span>Sign In</span> to your Account
          </p>

          <div className="email-password-btn-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="abc@gmail.com" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter 8+ characters"
            />

            <p className="forget-pass">Forget Password?</p>

            <button onClick={handleLogin} className="signin-btn">
              Sign In
            </button>

            <button className="continue-btn" onClick={handleLogin}>
              <FaGoogle /> Continue with Google
            </button>
            <button className="continue-btn" onClick={handleLogin}>
              <FaLinkedin /> Continue with LinkedIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
