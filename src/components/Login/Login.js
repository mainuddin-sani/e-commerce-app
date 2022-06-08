import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlerPassword = (event) => {
    setPassword(event.target.value);
  };
  
  if(user){
    navigate(from, {replace: true});
  }

  const handlerSubmit = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    
  }
  return (
    <div className="signup-heads">
      <h1>Sign Up</h1>
      <form action="#" onSubmit={handlerSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" onBlur={handlerEmail} name="email" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" onBlur={handlerPassword} name="password" id="" />
        </div>
        <p>{error?.message}</p>
        {
          loading && <p>Loading...</p>
        }
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
