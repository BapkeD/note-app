import React, { useState } from 'react';

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className={`addnote ${characterLimit - noteText.length === 0 ? 'note-limit-reached' : ''}`}>
            <textarea
                className="addnote-textarea"
                placeholder="type to add a note..."
                value={noteText}
                rows='8'
                cols='8'
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button 
                    onClick={handleSaveClick} 
                    className="savebutton"
                    disabled={characterLimit - noteText.length === 0}
                >
                    Add Note!
                </button>
            </div>
        </div>
    );
};

export default AddNote;
