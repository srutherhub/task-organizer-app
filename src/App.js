import "./App.css";
import React from "react";
import { useState } from "react";
import Note from "./components/Note";
import DisplayNotes from "./components/DisplayNotes";
import Sort from "./components/Sort";
import { Box } from "@chakra-ui/react";
import {
  white,
  coolgrey,
  warmgrey,
  blue,
  blackblue,
} from "./components/color.js";

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
      <Box borderRight="1px" borderColor={warmgrey} className="note">
        <Note getNotes={getNotes} />
      </Box>
      <Box className="displayNotes">
        <Sort notes={notes} setNotes={setNotes} />
        <DisplayNotes notes={notes} />
      </Box>
    </div>
  );
}
