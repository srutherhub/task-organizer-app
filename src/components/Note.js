import React from "react";
import { useState } from "react";

export default function Note(props) {
  const { getNotes } = props;
  const today = new Date();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createDate, setCreateDate] = useState(
    `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  );
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(1);

  //console.log(createDate);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="note-title">Title</label>
          <input
            type="text"
            name="title"
            id="note-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="note-title">Body</label>
          <input
            type="text"
            name="body"
            id="note-body"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="note-priority">Priority Level</label>
          <input
            type="number"
            value={priority}
            id="note-priority"
            min="1"
            max="5"
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="note-due-date">Due Date</label>
          <input
            type="date"
            id="note-due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <button
            id="note-save"
            onClick={() => {
              getNotes(title, body, createDate, dueDate, priority);
              setTitle("");
              setBody("");
              setDueDate("");
              setPriority(1);
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
