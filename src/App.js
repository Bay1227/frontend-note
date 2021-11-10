import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import React, { Component }  from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search'
import Header from './components/Header'

function App() {
  
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "this is my first note!",
    date: "11/09/2021",
  },
  {
    id: nanoid(),
    text: "this is my second note!",
    date: "11/09/2021",
  },
  {
    id: nanoid(),
    text: "this is my third note!",
    date: "11/09/2021",
  },
  {
    id: nanoid(),
    text: "this is my new note!",
    date: "11/30/2021",
  },
]);

const [searchText, setSearchText] = useState('');

useEffect(()=> {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

if (savedNotes) {
  setNotes(savedNotes);
}
}, [])

useEffect(()=> {
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes))

}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);

};

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes)
}
  return(
     <div className="container"> 
     <Header />
     <Search 
        handleSearchNote={setSearchText}
     />
     
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
};

export default App;





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

