import { useEffect, useState } from "react";
import "./_home.scss";
// @ts-ignore
import { auth } from "../firebase/config";
import { useNavigate } from "react-router";

export const Home = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user:any) => {
      if (user) {
        setIsAuth(true);
        console.log(user, "homeaxxxxxxxxxxxxxxx");
      } else {
        setIsAuth(false);
        console.log(user, "homebxxxxxxxxxxxxxxx");
      }
    });

    return unsubscribe;
  }, []);

  const handleGetStarted = () => {
    if (isAuth) {
      navigate("/parkingslot");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="home-container">
        <div className="first-part-container">
          <p className="title">
            Park With Perks: <span>the Parking Slot Detection System</span>
          </p>
          <p className="desc">
            Experience the next level of convenience and sustainability with our
            Smart Parking Detection System - where finding the perfect spot is
            as smart as it gets.
          </p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>

        <div className="second-part-container">
          <div className="img-container">
            <img src="./src/assets/car.png" alt="aaa" />
          </div>
        </div>
      </div>
    </>
  );
};
