import React, { useState } from 'react';
import NoteList from './componets/NoteList';
import { nanoid } from 'nanoid';
import Search from './componets/search';


const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            text: text,
            id: nanoid(),
            date: date.toLocaleDateString()
         }
         const newNotes = [...notes, newNote];
         setNotes(newNotes);
    };

    const deleteNote = (id) => {
       const newNotes = notes.filter((note) => note.id !== id);
       setNotes(newNotes);
    };

    return (
        <div className='container'>
            <Search />
            <NoteList notes={notes}
            handleDeleteNote={deleteNote}
            handleAddNote={addNote} />
            
        </div>
    );
};


export default App;
