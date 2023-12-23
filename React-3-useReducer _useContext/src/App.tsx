import Counter from "./Counter";
import { CounterProvider, initState } from "./context/counterContext";

function App() {
  return (
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>{(num: number) => <>current count: {num}</>}</Counter>
    </CounterProvider>
  );
}

export default App;
