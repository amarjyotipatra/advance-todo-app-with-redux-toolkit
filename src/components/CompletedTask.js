import { useSelector } from "react-redux";

export default function CompletedTask(props) {
  const todosValue = useSelector((state) => state.todos);

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
