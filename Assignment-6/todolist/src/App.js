import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add Task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, task].sort());
      setTask(""); // Clear input field
    }
  };

  // Delete Task
  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== taskToDelete));
  };

  return (
    <div
  style={{
    padding: "20px",
    maxWidth: "400px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
    Todo List
  </h2>
  <div style={{ display: "flex", marginBottom: "15px" }}>
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter a task"
      style={{
        flex: 1,
        padding: "10px",
        fontSize: "14px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        outline: "none",
      }}
    />
    <button
      onClick={addTask}
      style={{
        marginLeft: "10px",
        padding: "10px 15px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
    >
      Add
    </button>
  </div>
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
    {tasks.map((t, index) => (
      <li
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#fff",
          marginBottom: "5px",
          borderRadius: "5px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span style={{ flex: 1, color: "#333", fontSize: "14px" }}>{t}</span>
        <button
          onClick={() => deleteTask(t)}
          style={{
            padding: "5px 10px",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "12px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

  );
};

export default App;