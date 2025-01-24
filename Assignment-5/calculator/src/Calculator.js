import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(Number(num1) + Number(num2));
  const handleSubtraction = () => setResult(Number(num1) - Number(num2));
  const handleMultiplication = () => setResult(Number(num1) * Number(num2));
  const handleDivision = () => {
    if (num2 === "0" || num2 === "") {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial, sans-serif", background: "black", width: "80vw"}}>
  <h1 style={{ color: "#4CAF50", fontSize: "32px", marginBottom: "20px" }}>Calculator</h1>
  
  <div>
    <input
      type="number"
      placeholder="Enter first number"
      value={num1}
      onChange={(e) => setNum1(e.target.value)}
      style={{
        padding: "10px",
        margin: "10px",
        width: "200px",
        border: "2px solid #ccc",
        borderRadius: "5px",
      }}
    />
    <input
      type="number"
      placeholder="Enter second number"
      value={num2}
      onChange={(e) => setNum2(e.target.value)}
      style={{
        padding: "10px",
        margin: "10px",
        width: "200px",
        border: "2px solid #ccc",
        borderRadius: "5px",
      }}
    />
  </div>
  
  <div style={{ marginTop: "10px" }}>
    <button
      onClick={handleAddition}
      style={{
        padding: "10px 20px",
        margin: "5px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Add
    </button>
    <button
      onClick={handleSubtraction}
      style={{
        padding: "10px 20px",
        margin: "5px",
        backgroundColor: "#FF5722",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Subtract
    </button>
    <button
      onClick={handleMultiplication}
      style={{
        padding: "10px 20px",
        margin: "5px",
        backgroundColor: "#2196F3",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Multiply
    </button>
    <button
      onClick={handleDivision}
      style={{
        padding: "10px 20px",
        margin: "5px",
        backgroundColor: "#FFC107",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Divide
    </button>
  </div>
  
  <div
    style={{
      marginTop: "20px",
      fontSize: "20px",
      color: "#333",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      display: "inline-block",
    }}
  >
    <strong>Result: </strong> {result !== null ? result : "No calculation yet"}
  </div>
</div>
  )
}

export default Calculator;