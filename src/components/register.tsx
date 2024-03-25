import { createUserWithEmailAndPassword } from "firebase/auth";
// @ts-ignore
import { auth } from "../firebase/config";

import "./_register.scss";
import { useEffect } from "react";

export const Register = () => {
  useEffect(() => {
    const registerForm = document.querySelector(".register");

    const handleSubmit = (event) => {
      event.preventDefault();

      createUserWithEmailAndPassword(
        auth,
        registerForm.email.value,
        registerForm.password.value
      )
        .then((credentials) => {
          console.log(credentials);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (registerForm) {
      registerForm.addEventListener("submit", handleSubmit);
    }

    // Cleanup function to remove event listener
    return () => {
      if (registerForm) {
        registerForm.removeEventListener("submit", handleSubmit);
      }
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return (
    <>
      <form className="register">
        <div className="login-main-container">
          <div className="login-first-container">
            <div className="img-container">
              <img src="../src/assets/logo.png" alt="logo" />
            </div>
            <p>PARK WITH PERKS</p>
          </div>
          <div className="login-second-container">
            <div className="signin-already">
              Already have an account?<a href="/#/login"> Sign in</a>
            </div>

            <p>
              Register<span> Your Account</span>
            </p>

            <div className="email-password-btn-container">
              {/* <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" /> */}

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abc@gmail.com"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter 8+ characters"
              />
              <div className="checkbox-container">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  I agree to all the terms and conditions
                </label>
              </div>

              <button value="Register User" className="signup-btn">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
