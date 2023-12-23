import { useState } from "react";

interface User {
  id: number;
  userNumber: number;
}
function App() {
  // examples
  // const [count, setCount] = useState<User[] | null>([{ id: 1, userNumber: 3 }]);
  // can also have assertions
  // User[] = represent an array of object with User typewe34
  // const [count, setCount] = useState<User>[] | null({} as User)

  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);
  return <div className="app">John</div>;
}

export default App;
