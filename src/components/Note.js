import React from "react";
import { useState } from "react";

export default function Note(props) {
  const { getNotes } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createDate = new Date();
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(1);

  //console.log(createDate);
  return (
    <div className="inputFields">
      <div className="note-header">
        <h3>Create Note</h3>
        <p>
          {new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(createDate))}
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="inputsContainer">
          <label htmlFor="note-title">Title</label>
          <input
            type="text"
            name="title"
            id="note-title"
            // placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputsContainer">
          <label htmlFor="note-title">Body</label>
          <textarea
            type="text"
            name="body"
            id="note-body"
            // placeholder="Body"
            value={body}
            style={{ resize: "none" }}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="inputsContainer2">
          <div className="inputsContainer">
            <label htmlFor="note-priority">Priority Level</label>
            <select
              type="number"
              value={priority}
              id="note-priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value={5}>Critical</option>
              <option value={4}>Vital</option>
              <option value={3}>Moderate</option>
              <option value={2}>Low</option>
              <option value={1}>Optional</option>
            </select>
          </div>
          <div className="inputsContainer">
            <label htmlFor="note-due-date">Due Date</label>
            <input
              type="date"
              id="note-due-date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
        <div className="noteSaveButton">
          <button
            id="note-save"
            onClick={() => {
              getNotes(title, body, createDate, dueDate, priority, false);
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
