import "./App.css";
import React from "react";
import { useState } from "react";
import Note from "./components/Note";
import DisplayNotes from "./components/DisplayNotes";

export default function App() {
  const [notes, setNotes] = useState([]);

  const getNotes = (
    title,
    body,
    createDate,
    dueDate,
    priority,
    completeStatus
  ) => {
    setNotes([
      ...notes,
      {
        title: title,
        body: body,
        createDate: createDate,
        dueDate: dueDate,
        priority: priority,
        status: completeStatus,
      },
    ]);
  };

  //console.log(notes)

  return (
    <div className="App">
      <div className="note">
        <Note getNotes={getNotes} />
      </div>
      <div className="displayNotes">
        <DisplayNotes notes={notes} />
      </div>
    </div>
  );
}
