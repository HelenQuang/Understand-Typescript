import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const TodoList: React.FC = () => {
  const { todos, deleteTodo } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={deleteTodo.bind(null, todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
