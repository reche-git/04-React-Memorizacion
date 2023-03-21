import { memo, useMemo } from "react";

const CounterSon = ({ counter, add, substract }) => {
  // let superNumber = 0;

  // for(let i = 0; i < 1000000000; i++) {
  //   superNumber++;
  // }

  const superNumber = useMemo(() => {
    let number = 0;

    for (let i = 0; i < 1000000000; i++) {
      number++;
    }

    return number;
  }, []);

  console.log("Counter's Son is Rendering");
  return (
    <div style={{ border: "thin solid #000", margin: "1rem" }}>
      <h2>Counter's Son</h2>
      <nav>
        <button onClick={substract}>-</button>
        <button onClick={add}>+</button>
      </nav>
      <h3>{counter}</h3>
      <h3>Loop number: {superNumber}</h3>
    </div>
  );
};

export default memo(CounterSon);
// export default CounterSon;
