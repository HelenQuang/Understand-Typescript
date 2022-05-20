import React, { useState } from "react";
import { Todo } from "../todo.models";

interface TodoContextObj {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const TodoContext = React.createContext<TodoContextObj>({
  todos: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "t1", text: "Finish the course" },
    { id: "t2", text: "Do houseworks" },
    { id: "t3", text: "Attend meeting" },
  ]);

  const addTodo = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    todos: todos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
