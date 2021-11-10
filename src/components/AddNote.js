import React, { Component } from 'react';
import {useState} from 'react';

function AddNote({handleAddNote}) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (e) => {
    setNoteText(e.target.value);
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className='note-new'> 
      <textarea 
        rows='8'
        cols='10'
        placeholder='Add a note...'
        onChange={handleChange}
        value={noteText}
        >
      </textarea>
      <div className='note-footer'>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote;