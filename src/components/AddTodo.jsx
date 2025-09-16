import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../config/todoSlice";

function AddTodo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    
    const handleAdd = () => {
        if (text.trim() === "") return;
        dispatch(addTodo(text));
        setText("");
    };
    
    return (
        <div className="flex gap-2 justify-center mb-6">
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
        Add
        </button>
        </div>
    );
}

export default AddTodo;
