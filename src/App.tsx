import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/TodoContext";

const App: React.FunctionComponent = () => {
  return (
    <TodoContextProvider>
      <NewTodo />
      <TodoList />
    </TodoContextProvider>
  );
};

export default App;
