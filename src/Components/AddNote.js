import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, SetNoteText] = useState("");
  const characterLimit = 200;
//   const [charCounter, SetCharCounter] = useState(0);


  const handleChange =(e)=>{
    const text = e.target.value; 
    //check character limit
    if(text.length <= characterLimit){
        SetNoteText(text);
    }

  }

  const handleSaveClick = () => {

    //check if not null and spaces
    if(noteText.trim().length > 0){
        handleAddNote(noteText);
        SetNoteText("");
    }

};
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{ characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
