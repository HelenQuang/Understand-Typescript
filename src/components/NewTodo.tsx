import React, { useRef, useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        addTodo(textInputRef.current!.value);
      }}
      className="form-control"
    >
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
