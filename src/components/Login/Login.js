import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signup-heads">
      <h1>Sign Up</h1>
      <form action="#">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <button className="signup-btn">Sign Up</button>
      </form>
      <span className="already-account">
        Already have an account ? <Link to="/login">Login</Link>
      </span>
      <button className="continue-btn">Continue with Google</button>
    </div>
  );
};

export default Login;
