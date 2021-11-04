import { useEffect, useState } from "react";
import React, { Component }  from 'react';
import './App.css';

function App() {
//   useEffect(() => {
//     fetch("http://localhost:3000/api/v1/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(newUserData),
// })
//   .then((r) => r.json())
//   .then((data) => {
//     // save the token to localStorage for future access
//     localStorage.setItem("jwt", data.jwt);
//     // save the user somewhere (in state!) to log the user in
//     setUser(data.user);
//   });
//   }, []);

  return 
  <h1>Hello from React!</h1>;
}

export default App;



// import React, { Component } from "react";
// import { BrowserRouter as Router, Link, Route} from "react-router-dom";
// import Home from "./components/Home"
// // import Play from "./components/Play"
// // import YourStuff from "./components/YourStuff"
// import LoginPage from "./components/LoginPage"

// function App() {


//   // const development = 'http://localhost:3000'
//   // const production = 'https://phase-5-backend.herokuapp.com'
//   // const url = process.env.NODE_ENV === 'production' ? production : development;

  
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [user, setUser] = useState()

//   useEffect(() => {
//   const token = localStorage.getItem("jwt");
//   console.log("token: " + token)
//   // console.log(user.user.username)
//   // fetch(`${url}/api/v1/profile`, {
//     fetch("http://localhost:3000/api/v1/users", {
//     method: "GET",
//     headers: {
//     Authorization: `Bearer ${token}`,
//     },
//   }).then((response) => {
//     if (response.ok) {
//       response.json().then((data) => {
//         setLoggedIn(true)
//         setUser(data.user)
//       });
//     } else {
//       console.log("please log in")
//     }
//   });
//   }, []);
  
  
//   function signup(username, password, bio, avatar) {
//     // fetch(`${url}/api/v1/users`, {
//       fetch(`${url}/api/v1/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         user: {
//           username: `${username}`,
//           password: `${password}`,
//           bio: `${bio}`,
//           avatar: `${avatar}`,
//         },
//       }),
//     })
//     .then((response) => {
//       if (response.ok) {
//         response.json().then((data) => {
//           setUser(data.user)
//           setLoggedIn(true)
//           localStorage.setItem("jwt", data.jwt);
//         });
//       } else {
//         console.log("form incorrectly filled out")
//       }
//     })
//   }

//   function login(username, password) {
//     // fetch(`${url}/api/v1/login`, {
//       fetch(`${url}/api/v1/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         user: {
//           username: `${username}`,
//           password: `${password}`
//         }
//       })
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then((data) => {
//           console.log( "hi" + data.jwt )
//           setUser(data.user)
//           setLoggedIn(true)
//           localStorage.setItem("jwt", data.jwt);
//         });
//       } else {
//         console.log("wrong username/password")
//       }
//     })
//   }

//   // console.log("hi" + user.user.username)

//   function logout() {
//     localStorage.clear()
//     setUser(null)
//     setLoggedIn(false)
//   }

//   function update(updatedUser) {
//     setUser(updatedUser)
//   }

//   return (
//     <div className="App">

//       {user ?

//       <Router basename={process.env.PUBLIC_URL}>

//         <nav className="navbar-container">
//           {user ? <img src={user.avatar} alt="you"/> : ''}
//           <Link className="links" to="/">Home</Link>
//           <Link className="links" to="/play">Play</Link>
//           <Link className="links" to="/data">Data</Link>
//           <button className="logout" onClick={logout}>Logout</button>
//         </nav>
//             <Route exact path="/">
//               <Home url={url} update={update}/>
//             </Route>
//             <Route path="/play">
//               <Play url={url} currentUser={user}/>
//             </Route>
//             <Route path="/data">
//               <YourStuff url={url} currentUser={user}/>
//             </Route>
//       </Router> :
//       <LoginPage login={login} signup={signup}/>
//       }
//     </div>
//   )
// }

// export default App;

