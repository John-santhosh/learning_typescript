import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title="Hello" />
      <Section title="Section title">This is subs</Section>
      <Counter setCount={setCount}>
        <h1>Count: {count}</h1>
      </Counter>
      <List
        items={["coffee", "tea", "code"]}
        render={(item) => <span className="gold">{item}</span>}
      /> 
    </>
  );
}

export default App;
