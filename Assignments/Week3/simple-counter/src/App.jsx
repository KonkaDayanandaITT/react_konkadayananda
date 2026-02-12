import { useEffect, useState } from 'react'
import './App.css'

function App(){
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) ||  0;
  });

  useEffect(() =>{
    localStorage.setItem("count", count);
  }, [count]);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}
        disabled = {count === 0}
        >
          -
      </button>
      <button onClick={() => setCount(0)}>clear</button>
    </div>
  );

}

export default App;
