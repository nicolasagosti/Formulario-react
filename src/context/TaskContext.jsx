import React, { createContext, useState, useEffect } from "react";
import { tasks as tareas } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    const newTask = {
      name: task.name,
      id: tasks.length,
      edad: 20,
      fachero: true,
      descripcion: task.descripcion,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(tareas);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      console.log(tasks);
    }
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}