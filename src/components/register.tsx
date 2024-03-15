import "./_register.scss";

export const Register = () => {
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
          <div className="signin-already">
            Already have an account?<a href="/#/login"> Sign in</a>
          </div>

          <p>
            Register<span> Your Account</span>
          </p>

          <div className="email-password-btn-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="abc@gmail.com" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter 8+ characters"
            />
            <div className="checkbox-container">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                I agree to all the terms and conditions
              </label>
            </div>

            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};
