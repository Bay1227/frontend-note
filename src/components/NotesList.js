import Note from './Note'
import AddNote from './AddNote'
import React, { Component } from 'react'
import Search from './Search'
import {useState} from 'react'

function NotesList({notes, handleAddNote, handleDeleteNote}) {
  
  return(
    <div className="notes-list">
      
      {notes.map((note)=>(
        
        <Note 
          key={note.id}
          id={note.id} 
          text={note.text} 
          date={note.date} 
          handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NotesList;
