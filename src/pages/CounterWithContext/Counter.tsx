import * as React from "react";
import { useNavigate } from "react-router-dom";
import IncreaseButton from "./components/IncreaseButton";
import { CountContext, CountContextType } from "./context/CountContext";

const Counter: React.FC = () => {
  const { count } = React.useContext<CountContextType>(CountContext);
  const navigate = useNavigate();

  return (
    <div className="count-box">
      <h3>Counter increament with React Context</h3>
      <p>Click Count: {count}</p>
      <IncreaseButton/>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default Counter;
