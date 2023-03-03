import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random(),
        text: action.payload,
        started: false,
        completed: false,
      });
    },
    startTodo: (state, action) => {
      console.log("payload", action.payload);
      state.todos.find((el) => el.id === +action.payload).started = true;
    },
    completeTodo: (state, action) => {
      state.todos.find((val) => val.id === +action.payload).completed = true;
    },
  },
});
const store = configureStore({
  reducer: { todos: todosSlice.reducer },
});

export default store;
export const todosAction = todosSlice.actions;
