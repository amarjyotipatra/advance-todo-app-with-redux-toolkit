import { todosAction } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function OnGoingTask(props) {
  const dispatch = useDispatch();

  const todosValue = useSelector((state) => state.todos);

  const completeTodoHandler = (event) => {
    dispatch(todosAction.completeTodo(event));
  };

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
}
