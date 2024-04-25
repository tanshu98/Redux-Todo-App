import { createSlice, nanoid } from "@reduxjs/toolkit";

// create intial state

interface TodoState {
  todos: {
    id: string;
    text: string;
  }[];
}

const initialState: TodoState = {
  todos: [
    {
      id: "", 
      text:"",
    },
  ], // This is array of todos..and basically we are stating what things should be there in inidvidial todo object
};

// Create a slice -

export const toodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // create a todo
      const todo = {
        id: nanoid(),
        text: action.payload, // This payload is iteslef an object!
      };
      // update the state with these todo values
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
        // we will remove todo based on id..
        console.log(action.payload);
        
        state.todos = state.todos.filter((todo)=> todo.id !== action.payload) // jo id pass kiya hain..unko match maat krro..and baaki sabko le aao
    },
  },
});


export const {addTodo, removeTodo} = toodoSlice.actions;

// Register the reducers with store

export default toodoSlice.reducer;

// here in reducers..inside the functions u will always get 2 things..
// state and action

// We use state..to keep track of state values..
// Action -> returns data
