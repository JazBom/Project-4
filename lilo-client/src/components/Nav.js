import React from "react";
import {
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Nav(props) {
  // const user = { name: 'Jess', role: 'admin' };
  // const isAdmin = user.role === 'admin';

// const onLoginClick = (e) => {
//   window.localStorage.setItem('token', value));
// }

  return (
    <div className="navBar">

    <Button variant="info" className="homeButton" href="/home"></Button>
      
    <ul className="nav no-bull">
    <li><Link to="/about">About</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><a href='#Footer'>Contact</a></li>
    <li><Link to="/admin-user">Admin</Link></li>
    {props.loggedIn ? <li><Link to="/" onClick={props.logOut}>Logout</Link></li> : <li><Link to="/admin-user">Login</Link></li>}
    </ul>
    </div> 
  );
};

export { Nav };