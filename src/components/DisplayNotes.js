import React from "react";
import { useState, useEffect } from "react";

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
        <div>
          {item.dueDate === "" ? (
            <br/>
          ) : edit[index] ? (
            new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "long",
            }).format(new Date(formatDueDate(item.dueDate)))
          ) : (
            <div>
              <input
                type="date"
                id="note-due-date"
                value={item.dueDate}
                readOnly={edit[index]}
                onChange={(e) => handleDueDateChange(e, index)}
              />
            </div>
          )}
          <div>
            {new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "long",
            }).format(item.createDate)}
          </div>
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={item.title}
            readOnly={edit[index]}
            onChange={(e) => handleTitleChange(e, index)}
          />
        </div>
        <div>
          <textarea
            type="text"
            name="body"
            value={item.body}
            style={{resize:"none"}}
            readOnly={edit[index]}
            onChange={(e) => handleBodyChange(e, index)}
          />
        </div>
        <div>
          <input
            type="number"
            value={item.priority}
            id="note-priority"
            min="1"
            max="5"
            readOnly={edit[index]}
            onChange={(e) => handlePriorityChange(e, index)}
          />
        </div>
        <button onClick={() => handleEdit(index)}>
          {edit[index] ? "Edit" : "Save"}
        </button>
      </div>
    );
  });

  //console.log(notes);
  return <div>{displayNote}</div>;
}
