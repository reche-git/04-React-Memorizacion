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
          Memoriza una función, para no volverla a definir en cada render.
        </li>
        <li>
          Úsalo siempre que se pase una función como <b>prop</b> a un componente
          memorizado.
        </li>
        <li>
          Úsalo siempre que se pase una función como parámetro de un efecto.
        </li>
      </ul>
      <h3>
        <a
          href="https://es.reactjs.org/docs/hooks-reference.html#usememo"
          target="_blank"
          rel="noreferrer"
        >
          useMemo
        </a>
      </h3>
      <ul>
        <li>
          Memoriza un valor calculado, es decir, el resultado de una función.
        </li>
        <li>Genera propiedades computadas.</li>
        <li>Úsalo en procesos pesados.</li>
      </ul>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
