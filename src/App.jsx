import React, { useState } from 'react';
import CreateArea from './CreateArea';
import Footer from './Footer';
import Header from './Header';
import Notes from './Notes.jsx';


function App() {

 const [notes, setNotes] = useState([]);

 const addNote = note => {
   setNotes((prev) => {
     return [...prev, note];
   });
   // setInputText("");
 }

 const handleDelete = (id) => {
   setNotes(prev => {
     return prev.filter((note, index) => {
       return index !== id;
     });
   });
 }

 console.log(notes)
 return (
  <div className="App">
   <Header />
   <CreateArea onAdd={addNote} notes={notes} />
   <Notes onDelete={handleDelete} notes={notes}/>
   <Footer />
  </div>
 );
}

export default App;
