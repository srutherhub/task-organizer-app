import React from "react";
import { useState, useEffect } from "react";
import { Input, Textarea, Select, Button, Text, Box } from "@chakra-ui/react";
import { white, coolgrey, warmgrey, blue, blackblue } from "./color.js";

export default function DisplayNotes(props) {
  const { notes } = props;
  const [notesState, setNotesState] = useState(notes);
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    setNotesState(notes);
    setEdit(new Array(notes.length).fill(true));
  }, [notes]);

  function handleTitleChange(e, index) {
    const newTitle = [...notesState];
    newTitle[index].title = e.target.value;
    setNotesState(newTitle);
  }

  function handleBodyChange(e, index) {
    const newBody = [...notesState];
    newBody[index].body = e.target.value;
    setNotesState(newBody);
  }

  function handlePriorityChange(e, index) {
    const newPriority = [...notesState];
    newPriority[index].priority = e.target.value;
    setNotesState(newPriority);
  }

  function handleDueDateChange(e, index) {
    const newDueDate = [...notesState];
    newDueDate[index].dueDate = e.target.value;
    setNotesState(newDueDate);
  }

  function handleEdit(index) {
    const newEdit = [...edit];
    newEdit[index] = !edit[index];
    setEdit(newEdit);
  }

  function formatDueDate(date) {
    let [year, month, day] = date.split("-");
    day = parseInt(day) + 1;
    return `${year}-${month}-${day}`;
  }

  const displayNote = notesState.map((item, index) => {
    return (
      <div key={index}>
        <Text>
          {item.dueDate === "" ? (
            <br />
          ) : edit[index] ? (
            new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "long",
            }).format(new Date(formatDueDate(item.dueDate)))
          ) : (
            <div>
              <Input
                type="date"
                id="note-due-date"
                value={item.dueDate}
                readOnly={edit[index]}
                onChange={(e) => handleDueDateChange(e, index)}
              />
            </div>
          )}
          <Text>
            {new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "long",
            }).format(item.createDate)}
          </Text>
        </Text>
        <div>
          <Input
            type="text"
            name="title"
            value={item.title}
            readOnly={edit[index]}
            onChange={(e) => handleTitleChange(e, index)}
          />
        </div>
        <div>
          <Textarea
            type="text"
            name="body"
            value={item.body}
            style={{ resize: "none" }}
            readOnly={edit[index]}
            onChange={(e) => handleBodyChange(e, index)}
          />
        </div>
        <div>
          <Select
            type="number"
            value={item.priority}
            id="note-priority"
            readOnly={edit[index]}
            onChange={(e) => handlePriorityChange(e, index)}
          >
            <option value={5}>Critical</option>
            <option value={4}>Vital</option>
            <option value={3}>Moderate</option>
            <option value={2}>Low</option>
            <option value={1}>Optional</option>
          </Select>
        </div>
        <Button onClick={() => handleEdit(index)}>
          {edit[index] ? "Edit" : "Save"}
        </Button>
      </div>
    );
  });

  //console.log(notes);
  return <div>{displayNote}</div>;
}
