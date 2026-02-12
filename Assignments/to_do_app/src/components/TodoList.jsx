import TodoItem from "./TodoItem";

export default function TodoList({todos, deleteTodo, editTodo, toggleTodo}) {
  return(
    <ul>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
        />
      ))}

    </ul>
  );
}
