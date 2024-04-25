import "./App.css";
import { Box, Typography } from "@mui/material";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ display: "flex", justifyContent: "center", mt: 8, mb:2 }}
      >
        Todo App Using Redux
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" , flexDirection: 'column', alignItems: 'center'}}>
        <AddTodo />
        <Todos />
      </Box>
    </>
  );
}

export default App;
