import React, { useState } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "01/11/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "02/11/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "03/11/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString("en-GB"),
    };

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
