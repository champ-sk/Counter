import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>

      <div>Count: {count}</div><br/>
      <button onClick={onIncrease}>Increment</button>
      <button onClick={onDecrease}>Decrement</button>
    </div>
  );
};
export default App;
