import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./redux/actions";

const App = () => {
  const counterState = useSelector((state: any) => state?.upDownReducer);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => dispatch(decNumber())}
        className="p-2 rounded bg-red-500 text-5xl cursor-pointer"
      >
        -
      </button>
      <span className="p-2 text-5xl">{counterState}</span>
      <button
        onClick={() => dispatch(incNumber())}
        className="p-2 rounded bg-red-500 text-5xl cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default App;
