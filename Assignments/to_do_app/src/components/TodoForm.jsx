export default function TodoForm({text, setText, addTodo, isEditing}) {
  return (
    <div>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>
        {isEditing ? "Update" : "Add"}
      </button>

    </div>
  );
}
