import React from "react";
import { Link } from "react-router-dom";
import './signup.css';
const Signup = () => {
  return (
    <div className="signup-heads">
      <h1>Sign Up</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input type="password" name="password" id="" />
      </div>
      <button className="signup-btn">Sign Up</button>
      <span className="already-account">
        Already have an account ? <Link to="/login">Login</Link>
      </span>
      <button className="continue-btn">Continue with Google</button>
    </div>
  );
};

export default Signup;
