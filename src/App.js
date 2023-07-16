import React, { useState } from 'react';
import NoteList from './componets/NoteList';
import { nanoid } from 'nanoid';
import Search from './componets/search';
import Header from './componets/Header';


const App = () => {
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

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
        <div className={`${darkMode && 'darkMode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText}  />
                <NoteList
                    notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText)
                    )}
                    handleDeleteNote={deleteNote}
                    handleAddNote={addNote} />
            </div>
        </div>
    );
};


export default App;
