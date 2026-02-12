export default function TodoItem({todo, deleteTodo, editTodo, toggleTodo}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
         {todo.text}
      </span>


      <button onClick={() => editTodo(todo)}>edit</button>

      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  );
}
