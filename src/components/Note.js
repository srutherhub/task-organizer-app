import React from "react";
import { useState } from "react";
import { Input, Textarea, Select, Button, Text, Box } from "@chakra-ui/react";
import { white, coolgrey, warmgrey, blue, blackblue } from "./color.js";

export default function Note(props) {
  const { getNotes } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createDate = new Date();
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(1);

  const inputBorderColor = warmgrey;

  //console.log(createDate);
  return (
    <div className="inputFields">
      <div className="note-header">
        <Text fontSize="xl">Create Note</Text>
        <Text Text fontSize="xl">
          {new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(createDate))}
        </Text>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="inputsContainer">
          <Text htmlFor="note-title">Task</Text>
          <Input
            type="text"
            name="title"
            id="note-title"
            borderColor={inputBorderColor}
            // placeholder="Title"
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputsContainer">
          <Text htmlFor="note-title">Body</Text>
          <Textarea
            type="text"
            name="body"
            id="note-body"
            // placeholder="Body"
            borderColor={inputBorderColor}
            value={body}
            style={{ resize: "none" }}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="inputsContainer2">
          <div className="inputsContainer">
            <Text htmlFor="note-priority">Priority Level</Text>
            <Select
              type="number"
              value={priority}
              id="note-priority"
              borderColor={inputBorderColor}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value={5}>Critical</option>
              <option value={4}>Vital</option>
              <option value={3}>Moderate</option>
              <option value={2}>Low</option>
              <option value={1}>Optional</option>
            </Select>
          </div>
          <div className="inputsContainer">
            <Text htmlFor="note-due-date">Due Date</Text>
            <Input
              type="date"
              id="note-due-date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              borderColor={inputBorderColor}
            />
          </div>
        </div>
        <div className="noteSaveButton">
          <Button
            id="note-save"
            border="1px"
            borderColor={blue}
            _hover={{
              background: white,
              color: blue,
              border:"1px",
              borderColor: blue,
            }}
            color={white}
            bgColor={blue}
            onClick={() => {
              getNotes(title, body, createDate, dueDate, priority, false);
              setTitle("");
              setBody("");
              setDueDate("");
              setPriority(1);
            }}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
