import NotesList from "./Components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleAddNote = (noteText) => {
    let date = new Date();
    // let date =
    //   today.getDate() +
    //   "/" +
    //   parseInt(today.getMonth() + 1) +
    //   "/" +
    //   today.getFullYear();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: date.toLocaleDateString(),
    };
    // const newList = notes.concat(newNote);
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleDeleteNote = (id) => {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
