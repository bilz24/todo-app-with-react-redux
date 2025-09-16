import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../config/todoSlice";

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-700">My Todos</h2>
        <ul className="space-y-2">
        {todos.map((todo, index) => (
            <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
            >
            <span>{todo}</span>
            <div className="flex gap-2">
            <button
            onClick={() => {
                const newText = prompt("Edit todo:", todo);
                if (newText) {
                    dispatch(editTodo({ index, newText }));
                }
            }}
            className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
            >
            Edit
            </button>
            <button
            onClick={() => dispatch(removeTodo(index))}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
            Remove
            </button>
            </div>
            </li>
        ))}
        </ul>
        </div>
    );
}

export default TodoList;
