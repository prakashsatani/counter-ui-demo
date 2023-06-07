import * as React from "react";
import { useNavigate } from "react-router-dom";
import IncreaseButton from "./components/IncreaseButton";
import { increamentReducer, initialState } from "./reducer";

const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = React.useReducer(increamentReducer, initialState);
  const navigate = useNavigate()
  const handleClick = (val: number): void => {
    dispatch({ type: "increment", payload: val });
  };

  return (
    <div className="count-box">
      <h3>Counter increament with React Reducer</h3>
      <p>Click Count: {state.count}</p>
      <IncreaseButton name="Click Me!" handleClick={handleClick} />
      <button onClick={()=>navigate('/')}>Go Back</button>
    </div>
  );
}

export default CounterWithReducer;
