import Counter from "./components/Counter";
import Modal from "./components/Modal";
import cursorImg from "./assets/cursorImg.svg";
import { useModal } from "./hooks/useModal";

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpen3, openModal3, closeModal3] = useModal(false);
  const [isOpen4, openModal4, closeModal4] = useModal(false);

  return (
    <div>
      {/* Modal "Memoization React" */}
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
          <p>Makes the reading of the code faster in future loads!</p>
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

      {/* Modal2 "memo" */}
      <button className="btnModal" onClick={openModal2}>
        <img className="cursorImg2" src={cursorImg} alt="Cursor Click" />
        <h2 style={{ fontSize: "30px" }}>memo</h2>
        <img className="cursorImg" src={cursorImg} alt="Cursor Click" />
      </button>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <div className="ExplinationModal">
          <h3>A higher-order component</h3>
          <code>const MemoComponent = memo(Component, arePropsEqual?)</code>
          <p>
            memo is a higher-order component that wraps around a component to
            memoize the rendered output and avoid unnecessary renderings. This
            improves performance because it memoizes the result and skips
            rendering to reuse the last rendered result.
          </p>
          <p>
            In this case, memo is used in the component "CounterSon" to avoid
            re-render a for loop that counts from 0 to 1000000000. Doing this,
            everytime we change the props in the parent component, we don't need
            to re-render the child.
          </p>
        </div>
      </Modal>
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

      {/* Modal3 "useCallback" */}
      <button className="btnModal" onClick={openModal3}>
        <img className="cursorImg2" src={cursorImg} alt="Cursor Click" />
        <h2 style={{ fontSize: "30px" }}>useCallback</h2>
        <img className="cursorImg" src={cursorImg} alt="Cursor Click" />
      </button>
      <Modal isOpen={isOpen3} closeModal={closeModal3}>
        <div className="ExplinationModal">
          <h3>To remember</h3>
          <code>const cachedFn = useCallback(fn, dependencies)</code>
          <p>
            useCallback will return a memoized version of a function that only
            changes if one of the dependencies has changed. This is useful when
            passing callbacks to optimized child components that rely on
            reference equality to prevent unnecessary renders{" "}
          </p>
          <p>
            The component "Counter" has two functions that allows you increase
            or decrease your counter by one, those funtions are also passed to
            his child "CounterSon". So, to not re-render the functions
            everytime, it only re-renders when his dependencies change.
          </p>
          <p>It works similar as the useEffect hook.</p>
        </div>
      </Modal>
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

      {/* Modal4 "useMemo" */}
      <button className="btnModal" onClick={openModal4}>
        <img className="cursorImg2" src={cursorImg} alt="Cursor Click" />
        <h2 style={{ fontSize: "30px" }}>useMemo</h2>
        <img className="cursorImg" src={cursorImg} alt="Cursor Click" />
      </button>
      <Modal isOpen={isOpen4} closeModal={closeModal4}>
        <div className="ExplinationModal">
          <h3>BANANA</h3>
          <code>banana code</code>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </Modal>
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
