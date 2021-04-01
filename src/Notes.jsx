import React from 'react';
import Note from './Note';
import { v4 as uuidv4 } from 'uuid';

const Notes = ({notes, onDelete}) => { 
 return (
 notes.length > 0 &&
 (notes.map((note, index) => (
  <Note 
   key={uuidv4()}
   id={index}
   title={note.title}
   note={note.content}
   onDelete={onDelete}
  />
  ))
 ))
}
 
export default Notes;