import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  const handelChange = (e) => {
    if (e.target.value <= 20 && e.target.value >= 0) {
      setCount(e.target.value);
    }
  };
  return (
    <div>
      <h4>Counter program</h4>
      <div className="wrapper">
        <button
          className="section"
          onClick={() => count > 0 && setCount(count - 1)}
        >
          -
        </button>
        <input value={count} onChange={(e) => handelChange(e)} />

        <button
          className="section"
          onClick={() => count < 20 && setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
