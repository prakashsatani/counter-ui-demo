import React from "react";
import { CountContext, CountContextType } from "../context/CountContext";

const IncreaseButton: React.FC = () => {
  const { increaseCount } = React.useContext<CountContextType>(CountContext);
  return <button onClick={() => increaseCount(1)}>Click Me!</button>;
};

export default IncreaseButton;
