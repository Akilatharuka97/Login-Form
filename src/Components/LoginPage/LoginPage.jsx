import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
        </div>

        <div className="remember-fogot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>Dont't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
