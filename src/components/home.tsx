import "./_home.scss";

export const Home = () => {
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
          <button>Get Started</button>
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
