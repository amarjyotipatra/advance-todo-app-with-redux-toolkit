import React from "react";
import { useDispatch } from "react-redux";
import { todosAction } from "../store/store";
import "./todos.css";

export default function Header() {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const addTextHandler = (e) => {
    console.log("text", text, e.target.value);
    setText(e.target.value);
  };
  const keyEventHandler = (event) => {
    if (event.key === "Enter") {
      addTodoHandler();
    }
  };
  const addTodoHandler = (event) => {
    event.preventDefault();
    // console.log("value", event.target.value);
    dispatch(todosAction.addTodo(text));
    setText("");
  };

  return (
    <div className="placeholder">
      <input
        className="input"
        placeholder="Enter a To-Do"
        onChange={addTextHandler}
        type="text"
        value={text}
        onKeyUpCapture={keyEventHandler}
      />
      <button
        className="button"
        disabled={!text.trim()}
        onClick={addTodoHandler}
        type="submit"
        style={{}}
      >
        Add
      </button>
    </div>
  );
}
