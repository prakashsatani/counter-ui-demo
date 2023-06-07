import * as React from "react";

export type CountContextType = {
  count: number;
  increaseCount: (val: number) => void;
};

export const CountContext = React.createContext<CountContextType>({
  count: 0,
  increaseCount(val) {
    console.warn("method not implement");
  },
});

const ConterProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [count, setCount] = React.useState<number>(0);

  const increaseCount = React.useCallback((val: number) => {
    setCount((prev) => prev + val);
  }, []);

  return (
    <CountContext.Provider value={{ count, increaseCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default ConterProvider;
