import React from "react";
import "./header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const HandlerSignOut = () => {
      signOut(auth)
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="navbar-nav">
        <li>
          <Link to="/orders">Order</Link>
        </li>
        <li>
          <Link to="/order-review">Order Review</Link>
        </li>
        <li>
          <Link to="/inventory">Manage Inventory</Link>
        </li>
        {user ? (
          <li>
            <button onClick={HandlerSignOut}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
