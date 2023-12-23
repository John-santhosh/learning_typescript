import { ReactNode } from "react";

type CounterProps = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const Counter = ({ children, setCount }: CounterProps) => {
  // we dont have to explicitly define the type of the state it will automatically inferred to it
  // const [count, setCount] = useState<number>(0);

  return (
    <>
      {children}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Counter;
