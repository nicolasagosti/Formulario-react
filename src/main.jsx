import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import TaskForm from "./components/TaskForm.jsx";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import { createRoot } from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);