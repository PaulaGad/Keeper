import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea({onAdd}) {
 const [note, setNote] = useState({
  title: "",
  content: ""
 });
 const [isEdited, setIsEdited] = useState(false); 

 const {title, content} = note;

 function handleChange(e) {
  const { name, value } = e.target;
  setNote(prevValue => ({...prevValue, [name]: value }));
  setIsEdited(true);
 }

 function submitNote(e) {
  e.preventDefault();
  onAdd(note);
  setNote({
   title: "",
   content: ""
  });
  setIsEdited(false);
 }

 return (
  <div>
   <form className="create-note">
    <input
     name="title"
     onChange={handleChange}
     value={title}
     placeholder="Title"
    />
    <textarea
     name="content"
     onChange={handleChange}
     value={content}
     placeholder="Take a note..."
     rows="3"
     hidden={isEdited ? false : true}
    />
    <Zoom in={true}>
     <Fab onClick={submitNote}><AddIcon /></Fab>
    </Zoom>
   </form>
  </div>
 );
}

export default CreateArea;
