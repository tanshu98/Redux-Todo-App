import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <Box sx={{ display: "flex", gap:2 }}>
          <TextField
            label="Add"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Add Todo
          </Button>
        </Box>
      </form>
    </>
  );
}

export default AddTodo;

// Add todo kaise hoga..ek event ko dispactch krke..So we have to dispatch an event

// Dispatch ek reducer ko use krte hue..store main value add krta hain
