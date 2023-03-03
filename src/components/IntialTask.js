import { todosAction } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function OnGoingTask(props) {
  const dispatch = useDispatch();

  const todosValue = useSelector((state) => state.todos);

  const startTodoHandler = (event) => {
    console.log("event", event);
    dispatch(todosAction.startTodo(event));
  };

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
                //   id={el.id}
                onClick={(e) => {
                  e.preventDefault();
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
}
