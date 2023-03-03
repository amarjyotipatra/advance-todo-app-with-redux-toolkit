import React from "react";
import "./todos.css";
import "../App.css";
import Header from "./Header";
import Task from "./Task";
// import IntialTask from "./IntialTask";
// import OnGoingTask from "./OnGoing";
// import CompletedTask from "./CompletedTask";

export default function Todos() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="table">
          <div className="header">Todos Application</div>
          <Header />
          <div className="content">
            <div className="card">
              <Task title="Initial Task" value="Initial Task" />
            </div>

            <div className="card">
              <Task title="Ongoing Task" value="Ongoing Task" />
            </div>

            <div className="card">
              <Task title="Completed Task" value="Completed Task" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
