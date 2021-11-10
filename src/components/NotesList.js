import Note from './Note'
import AddNote from './AddNote'
import React, { Component } from 'react'

function NotesList({notes, handleAddNote, handleDeleteNote}) {
  return(
    <div className="notes-list">
      {notes.map((note)=>(
        <Note 
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