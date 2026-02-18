import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "./counterSlice";
function App(){
const count=useSelector((state) => state.counter.value);
const dispatch = useDispatch();

  return(
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>+</button>
    </div>
  );
}

export default App;