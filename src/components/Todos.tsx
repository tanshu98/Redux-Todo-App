import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { Box, Button } from "@mui/material";
import { removeTodo } from "../redux/reducers/TodoSlice";

function Todos() {
  const todos = useSelector((state: RootState) => {
    console.log(state.todos);
    return state.todos;
  });

  const dispatch = useDispatch();
  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap:2,m:2, justifyContent: 'center'}}>
        {todos.map((todo: any) => (
            <Box  >
          <li key={todo.id}>
            {todo.text}
            <Button
            sx={{ml:2}}
              onClick={() => dispatch(removeTodo(todo.id))}
              variant="contained"
            >
              Close
            </Button>
          </li>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Todos;

// List all todos here!
