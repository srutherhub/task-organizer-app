import "./App.css";
import React from "react";
import { useState } from "react";
import Note from "./components/Note";
import DisplayNotes from "./components/DisplayNotes"


export default function App() {
  const [notes, setNotes] = useState([]);

  const getNotes = (title,body,createDate,dueDate,priority) => {
    setNotes([...notes, {title:title,body:body,createDate:createDate,dueDate:dueDate,priority:priority}]);
  }

  //console.log(notes)

  return (
    <div className="App">
      <div>
        <Note getNotes = {getNotes}/>
        <DisplayNotes/>
      </div>
    </div>
  );
}
