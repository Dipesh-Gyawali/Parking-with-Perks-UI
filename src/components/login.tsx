import "./_login.scss";

export const Login = () => {
  return (
    <>
      <div className="login-main-container">
        <div className="login-first-container">
          <div className="img-container">
            <img src="" alt="" />
          </div>
          <p>PARK WITH PERKS</p>
        </div>

        <div className="login-second-container">
          <p>Sign In <span>to your Account</span></p>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="abc@gmail.com" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter 8+ characters"
            />

            <p>Forget Password?</p>

            <button>Sign In</button>
            <button>Continue with Google</button>
            <button>Continue with Google</button>
          </div>
        </div>
      </div>
    </>
  );
};
