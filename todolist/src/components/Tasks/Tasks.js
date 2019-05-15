import React from "react";
import Task from "./Task/Task";
import './Tasks.css'

const tasks = props => {
  let tasks = null;
  const taskClasses = ["tasks-list"];

  props.concluida
    ? taskClasses.push("concluded-tasks")
    : taskClasses.push("open-tasks");
  //console.log("props");
  //console.log(props);
  if (props.tasks) {
    tasks = props.tasks.map(task => {
      return (tasks = (
        <Task
          key={task.name+task.deadline}
          nome={task.name}
          descricao={task.description}
          prazo={task.deadline}
          responsavel={task.owner}
          feita={task.done}
          atrasada={task.atrasada}
          taskAdd={props.taskAdded}
        />
      ));
    });
  }

  return (
    <div className={taskClasses.join(" ")}>
      <div className={"tasks-list__header"}>
        {" "}
        {props.concluded
          ? "Tarefas Concluídas/Arquivadas"
          : "Tarefas Por Fazer"}
      </div>
      {tasks}
    </div>
  );
};

export default tasks;
