import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-2 rounded-md" >
      <h1 className="text-xl font-bold capitalize">Name: {task.name}</h1>
      <p>Edad: {task.Edad}</p>
      <p className="text-gray-500 text-sn">Fachero: {task.fachero ? "Sí" : "No"}</p>
      <p>descripcion: {task.descripcion}</p>
      <button className="bg-red-500 px-2 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;