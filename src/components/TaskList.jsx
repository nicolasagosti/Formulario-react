import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
const {tasks} = useContext(TaskContext)
  if(tasks.lenght === 0){
    return <h1>No Hay tareas Aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>))}
    </div>
  );
}

export default TaskList;