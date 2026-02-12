import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import "./App.css"

export default function App(){
  const [todos, setTodos] = useState(() =>
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()){
      alert("please enter something!");
      return;
    }

    if (editId === null) {
      setTodos([
        ...todos,
        { id: Date.now(), text, completed: false }
      ]);
    } 
    
    else {
      setTodos(
        todos.map(t =>
          t.id === editId ? { ...t, text } : t
        )
      );
      setEditId(null);
    }

    setText("");
  };

  const deleteTodo = id =>
    setTodos(todos.filter(t => t.id !== id));

  const editTodo = todo => {
    setText(todo.text);
    setEditId(todo.id);
  };

  const toggleTodo = id =>
    setTodos(
      todos.map(t =>
        t.id === id ? {...t, completed: !t.completed} : t
      )
    );

  let filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  if(currentFilter === "completed")
    filteredTodos = filteredTodos.filter(t => t.completed);

  if(currentFilter === "pending")
    filteredTodos = filteredTodos.filter(t => !t.completed);

  return(
    <div className="container">
      <h2>Todo App</h2>

      <TodoForm
        text={text}
        setText={setText}
        addTodo={addTodo}
        isEditing={editId !== null}
      />

      <SearchBar setSearchText={setSearchText} />

      <Filters setCurrentFilter={setCurrentFilter} />

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleTodo={toggleTodo}
      />
      
    </div>
  );
}
