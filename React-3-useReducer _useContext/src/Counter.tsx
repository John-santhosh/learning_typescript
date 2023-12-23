import { ChangeEvent, ReactNode, useReducer } from "react";

type ChildType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildType) => {
  return (
    <>
      <h1>{children(state.count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={handleTextInput} />
    </>
  );
};

export default Counter;
