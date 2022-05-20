import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.models";

const App: React.FunctionComponent = () => {
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

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
