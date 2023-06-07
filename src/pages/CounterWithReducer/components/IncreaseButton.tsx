import React from "react";

type IncreaseButtonProps = {
  name: string;
  handleClick: (val: number) => void;
};

const IncreaseButton: React.FC<IncreaseButtonProps> = ({
  name,
  handleClick,
}) => {
  return <button onClick={() => handleClick(1)}>{name}</button>;
};

export default IncreaseButton;
