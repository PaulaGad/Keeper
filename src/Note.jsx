import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({id, title, note, onDelete}) => {
 return ( 
 <div className="note">
  <h1>{title}</h1>
  <p>{note}</p>
  <button onClick={() => onDelete(id)}><DeleteIcon /></button>
 </div>
 );
}
 
export default Note;