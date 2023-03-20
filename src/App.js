import Counter from "./components/Counter";
import Modal from "./components/Modal";
import cursorImg from "./assets/cursorImg.svg";
import { useModal } from "./hooks/useModal";

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button className="btnModal" onClick={openModal}>
        <img className="cursorImg2" src={cursorImg} alt="Cursor Click" />
        <h1>Memoization React</h1>
        <img className="cursorImg" src={cursorImg} alt="Cursor Click" />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>Time to use Memoization</h3>
          <p>
            In programming, memoization is an optimization technique that makes
            applications more efficient and hence faster. It does this by
            storing computation results in cache, and retrieving that same
            information from the cache the next time it's needed instead of
            computing it again.
          </p>
          <p>
            Makes the reading of the code faster in future loads!
          </p>
          <p style={{ textAlign: "center" }}>
            <a
              href="https://github.com/reche-git"
              rel="noreferrer"
              target="_blank"
              style={{ marginRight: "5px" }}
            >
              GitHub
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/alan-reche-5b651122a/"
              rel="noreferrer"
              target="_blank"
              style={{ marginLeft: "5px" }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </Modal>

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
