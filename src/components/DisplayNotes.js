import React from "react";
import { useState, useEffect } from "react";
import {
  Input,
  Textarea,
  Select,
  Button,
  Text,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import DeleteAlert from "./DeleteAlert.js";
import { white, coolgrey, warmgrey, blue, blackblue } from "./color.js";

export default function DisplayNotes(props) {
  const { notes } = props;
  const [notesState, setNotesState] = useState(notes);
  const [edit, setEdit] = useState([]);
  const [deleteNote, setDeleteNote] = useState([]);

  useEffect(() => {
    setNotesState(notes);
    setEdit(new Array(notes.length).fill(true));
    setDeleteNote(new Array(notes.length).fill(false));
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
    if (month[0] === "0") {
      month = month.slice(1);
    }
    return `${year}-${month}-${day}`;
  }

  function handleDelete(toggle, index) {
    const newDelete = [...deleteNote];
    if (toggle) newDelete[index] = true;
    if (!toggle) newDelete[index] = false;
    setDeleteNote(newDelete);
  }

  const displayNote = notesState.map((item, index) => {
    return (
      <Card key={index} margin="50px" height="600px" width="450px">
        <CardHeader>
          <Box marginBottom="20px" textAlign="right">
            {item.dueDate === "" ? (
              <br />
            ) : edit[index] ? (
              <Text fontSize="xl" marginBottom="10px">
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "long",
                }).format(new Date(formatDueDate(item.dueDate)))}
              </Text>
            ) : (
              <Input
                type="date"
                id="note-due-date"
                value={item.dueDate}
                readOnly={edit[index]}
                onChange={(e) => handleDueDateChange(e, index)}
              />
            )}
            <Text fontSize="xs">
              {new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "long",
              }).format(item.createDate)}
            </Text>
          </Box>

          <div>
            <Input
              type="text"
              name="title"
              fontSize="2xl"
              value={item.title}
              readOnly={edit[index]}
              onChange={(e) => handleTitleChange(e, index)}
            />
          </div>
        </CardHeader>
        <CardBody>
          <Textarea
            type="text"
            name="body"
            height="300px"
            value={item.body}
            style={{ resize: "none" }}
            readOnly={edit[index]}
            onChange={(e) => handleBodyChange(e, index)}
          />
        </CardBody>
        <CardFooter
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Select
            pointerEvents={edit[index] ? "none" : "block"}
            width="150px"
            isReadOnly={edit[index]}
            value={item.priority}
            id="note-priority"
            onChange={(e) => handlePriorityChange(e, index)}
          >
            <option value={5}>Critical</option>
            <option value={4}>Vital</option>
            <option value={3}>Moderate</option>
            <option value={2}>Low</option>
            <option value={1}>Optional</option>
          </Select>
          <Box>
            <Button
              onClick={() => handleEdit(index)}
              width="60px"
              bgColor={edit[index] ? "white" : blue}
              border="1px"
              color={edit[index] ? blue : "white"}
              _hover={{
                bgColor: edit[index] ? coolgrey : coolgrey,
                borderColor: blue,
                color: blue,
              }}
            >
              {edit[index] ? "Edit" : "Save"}
            </Button>
            <IconButton
              aria-label="Delete Note"
              border="1px"
              borderColor={blue}
              bgColor="white"
              _hover={{
                bgColor: coolgrey,
              }}
              marginLeft="5px"
              icon={<DeleteIcon />}
              onClick={() => handleDelete(true, index)}
            />
          </Box>
        </CardFooter>
        <CardFooter height="100px" paddingTop="0px">
          {" "}
          {deleteNote[index] ? (
            <DeleteAlert
              handleDelete={handleDelete}
              index={index}
              noteTitle={item.title}
            />
          ) : (
            ""
          )}
        </CardFooter>
      </Card>
    );
  });

  //console.log(notes);
  return (
    <div
      style={{
        overflow: "scroll",
        height: "90vh",
        display: "grid",
        gridTemplateColumns: "37vw 37vw ",
        justifyItems: "center",
      }}
    >
      {displayNote}
    </div>
  );
}
