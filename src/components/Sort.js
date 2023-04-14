import { Box, Select, Text, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Sort(props) {
  const [order, setOrder] = useState(true);
  const { notes, setNotes } = props;

  function sortNotes(notesList, sortType) {
    const newNotes = [...notesList];
    if (sortType === "1") {
      newNotes.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    if (sortType === "2") newNotes.sort((a, b) => a.createDate - b.createDate);
    if (sortType === "3") newNotes.sort((a, b) => b.priority - a.priority);

    setNotes(newNotes);
  }

  console.log(notes);
  return (
    <Box height="10vh" padding="10px" display="flex" justifyContent="flex-end">
      <Box padding="5px">
        <Text padding="10px">Sort By</Text>
      </Box>
      <Box padding="5px">
        <Select
          width="200px"
          onChange={(e) => sortNotes(notes, e.target.value)}
        >
          <option value="2">Date Added</option>
          <option value="1">Due Date</option>
          <option value="3">Priority Level</option>
        </Select>
      </Box>
      {/* <Box padding="5px">
        <IconButton
          onClick={() => setOrder(true)}
          icon={<ArrowUpIcon />}
        ></IconButton>
        <IconButton
          onClick={() => setOrder(false)}
          icon={<ArrowDownIcon />}
        ></IconButton>
      </Box> */}
    </Box>
  );
}
