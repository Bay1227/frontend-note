import React, {Component} from 'react'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom';



function Header({ logout }) {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
    .then((response) => {
      if (response.ok) {
        navigate('/');
      }
      else {
        response.json().then((error) => alert(error.error))}

    });
  }


  return(
    <div className="header"> 
      {/* <h1>Notes</h1> */}
            <a className="navbar" href="/">Notes</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      
            <a className="navbar" href="login">Login</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a className="navbar" href="signup">Signup</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a className="navbar" onClick={handleLogout}>Logout</a>
    </div>
  )
}

export default Header;