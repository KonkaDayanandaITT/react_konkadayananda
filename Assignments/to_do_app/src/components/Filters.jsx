export default function Filters({setCurrentFilter}) {
  return(
    <div className="filters">
      <button onClick={() => setCurrentFilter("all")}>All</button>
      <button onClick={() => setCurrentFilter("pending")}>Pending</button>
      <button onClick={() => setCurrentFilter("completed")}>Completed</button>
    </div>
  );
}
