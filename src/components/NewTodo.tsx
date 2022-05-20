import React, { useRef } from "react";

interface addTodoProp {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<addTodoProp> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

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
