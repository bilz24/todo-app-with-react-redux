import React from "react";
import { Provider } from "react-redux";
import store from "./config/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
