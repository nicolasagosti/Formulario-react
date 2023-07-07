import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [name, setTitle] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      name,
      descripcion
    });
    setTitle("");
    setdescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-3">Ingresa Los Datos</h1>
      <input
        type="text"
        placeholder="Ingresa tu Nombre"
        onChange={(e) => setTitle(e.target.value)}
        value={name}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <br />
      <textarea
        placeholder="Escribe una descripción"
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setdescripcion(e.target.value)}
        value={descripcion}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <br />
      <button
      className="bg-indigo-500 px-3 py-1 text-white">Guardar Persona</button>
    </form>
    </div>
  );
}

export default TaskForm;