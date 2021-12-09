import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import React, { Component }  from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Header from './components/Header'
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup';
import Search from './components/Search';




function App() {
  const [searchText, setSearchText] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
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
     <Header setCurrentUser={setCurrentUser} />
     <Search handleSearchNote={setSearchText}/>
    

      {/* <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      /> */}
      <Routes>
          <Route path="/" element={<NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} 
          
          />} />
          <Route path="login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="signup" element={<Signup setCurrentUser={setCurrentUser} /> } />
          {/* <Route path="me" element={<Profile currentUser={currentUser} /> } /> */}
      </Routes>
    </div>
   
  )
};

export default App;





