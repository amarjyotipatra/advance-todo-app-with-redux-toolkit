import React from "react";
import { todosAction } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Task(props) {
  let value = props.value;
  const dispatch = useDispatch();

  const todosValue = useSelector((state) => state.todos);
  //   console.log("--------------->", todosValue);

  const startTodoHandler = (event) => {
    console.log("event", event);
    dispatch(todosAction.startTodo(event));
  };

  const completeTodoHandler = (event) => {
    dispatch(todosAction.completeTodo(event));
  };

  if (value === "Initial Task") {
    return (
      <>
        <p>
          <u>{props.title}</u>
        </p>
        <ol>
          {todosValue.todos
            .filter((el) => !el.started && !el.completed)
            .map((el) => (
              <div
                key={el.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <h5 className="line">{el.text}</h5>
                <button
                  className="card-btn"
                  onClick={() => {
                    startTodoHandler(el.id);
                  }}
                  style={{ marginRight: "5%" }}
                >
                  Start To-do
                </button>
              </div>
            ))}
        </ol>
      </>
    );
  } else if (value === "Ongoing Task") {
    return (
      <>
        <p>
          <u>{props.title}</u>
        </p>
        <ul>
          {todosValue.todos
            .filter((el) => el.started && !el.completed)
            .map((el) => (
              <div key={el.id} style={{ display: "flex", marginRight: "5%" }}>
                <h5 className="line">{el.text}</h5>
                <button
                  className="card-btn"
                  onClick={() => completeTodoHandler(el.id)}
                >
                  Complete To-do
                </button>
              </div>
            ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <p>
          <u>{props.title}</u>
        </p>
        <ul>
          {todosValue.todos
            .filter((el) => el.started && el.completed)
            .map((el) => (
              <div key={el.id}>
                <h5 className="line">{el.text}</h5>
              </div>
            ))}
        </ul>
      </>
    );
  }
}
