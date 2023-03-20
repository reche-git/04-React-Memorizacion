import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Memoization React</h1>
      <hr />
      <h2>Theory</h2>
      <h3>
        <a
          href="https://react.dev/reference/react/memo"
          target="_blank"
          rel="noreferrer"
        >
          memo
        </a>
      </h3>
      <ul>
        <li>It is responsible for memorizing a component.</li>
        <li>
          Re-renders it the moment its <b>props</b> change.
        </li>
        <li>Avoids re-rendering.</li>
        <li>
          It must be avoided as much as possible, since the memorization task
          could be more expensive than the re-rendering of the component.
        </li>
        <li>
          The better way to use it is when:
          <ul>
            <li>We have to many elements rendered in a list.</li>
            <li>We make an uniques call to an API.</li>
            <li>A component becomes really heavy.</li>
            <li>We receive performance alerts in the console.</li>
          </ul>
        </li>
      </ul>
      <h3>
        <a
          href="https://react.dev/reference/react/useCallback"
          target="_blank"
          rel="noreferrer"
        >
          useCallback
        </a>
      </h3>
      <ul>
        <li>
          useCallback is a React Hook that lets you cache a function definition
          between re-renders.
        </li>
        <li>
          Use it every time you pass a function as a <b>prop</b> to a memoized
          component
        </li>
        <li>Use it when passing a function as a param of an effect.</li>
      </ul>
      <h3>
        <a
          href="https://beta.reactjs.org/reference/react/useMemo"
          target="_blank"
          rel="noreferrer"
        >
          useMemo
        </a>
      </h3>
      <ul>
        <li>
          It memoize the value of a calculus, i.e. the result of a function.
        </li>
        <li>It generates computed props.</li>
        <li>It's recommended for demanding process.</li>
      </ul>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
