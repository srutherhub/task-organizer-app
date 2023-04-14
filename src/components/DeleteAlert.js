import React from "react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function DeleteAlert(props) {
  const { noteTitle, handleDelete, index } = props;
  return (
    <Alert
      status="error"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <AlertDescription>
        Delete {noteTitle !== "" && `"${noteTitle}" ?`}
      </AlertDescription>
      <div>
        <IconButton icon={<CheckIcon />} bgColor="transparent"></IconButton>
        <IconButton icon={<CloseIcon />} bgColor="transparent" onClick={()=>handleDelete(false,index)}></IconButton>
      </div>
    </Alert>
  );
}
