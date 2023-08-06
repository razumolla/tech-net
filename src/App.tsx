import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex m-16">
        <button
          className="bg-blue-500 m-5"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 m-5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Value
        </button>

        <div className="text-2xl"> {count} </div>

        <button
          className="bg-blue-500 m-5"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          Decrement{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
