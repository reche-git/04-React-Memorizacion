import { useCallback, useState } from "react";
import CounterSon from "./CounterSon";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  // const substract = () => setCounter(counter - 1);
  const substract = useCallback(() => setCounter(counter - 1), [counter]);

  // const add = () => setCounter(counter + 1);
  const add = useCallback(() => setCounter(counter + 1), [counter]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter</h2>
      <nav>
        <button onClick={substract}>-</button>
        <button onClick={add}>+</button>
      </nav>
      <h3>{counter}</h3>
      <p>
        This next input has an onChange event that re-renders the component, but
        thanks to the use of 'memo' 'useCallback' and 'useMemo', we reduce the
        load of your computer's processor.
      </p>
      <input type="text" onChange={handleInput} value={input} />
      <CounterSon counter={counter} add={add} substract={substract} />
    </div>
  );
};

export default Counter;
