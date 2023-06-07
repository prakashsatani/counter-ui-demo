import ConterProvider from "./context/CountContext";
import Counter from "./Counter";

const CounterWitContext: React.FC = () => {
  return (
    <ConterProvider>
      <Counter />
    </ConterProvider>
  );
};

export default CounterWitContext;
