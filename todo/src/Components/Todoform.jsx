import React, { useState } from "react";

function Todoform() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Addd a todo"
        value={input}
        name="text"
        onChange={handleChange}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default Todoform;
