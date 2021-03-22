import React from 'react';
import Note from './Note';
import notes from './notes.js';

const Notes = () => ( notes.map(note => (
 <Note 
  key={note.id}
  title={note.title}
  note={note.content}
 />
 ))
)
 
export default Notes;