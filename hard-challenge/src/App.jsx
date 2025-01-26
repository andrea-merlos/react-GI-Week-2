import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoWrapper } from "./Components/TodoWrapper";
import { TaskDetail } from "./Components/TaskDetail";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<TodoWrapper todos={todos} setTodos={setTodos} />}
          />
          <Route
            path="/task/:taskId"
            element={<TaskDetail todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
