import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlerPassword = (event) => {
    setPassword(event.target.value);
  };
  const handlerConfimPassword = (event) => {
    setConfimPassword(event.target.value);
  };
  
  if(user){
    navigate('/orders');
  }

  const handlerSubmit = (e)=>{
    e.preventDefault();
    if(confimPassword !== password){
      setError('Doesn\'t password match');
      return;
    }
    createUserWithEmailAndPassword(email, password);
    
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
          <input
            type="password"
            onBlur={handlerPassword}
            name="password"
            id=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            onBlur={handlerConfimPassword}
            name="password"
            id=""
          />
        </div>
        <p style={{color: 'red'}}>{error}</p>
        <button className="signup-btn">Sign Up</button>
        <span className="already-account">
          Already have an account ? <Link to="/login">Login</Link>
        </span>
        <button type="submit" className="continue-btn">Continue with Google</button>
      </form>
    </div>
  );
};

export default Signup;
