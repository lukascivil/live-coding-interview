import { useCallback, useEffect, useState } from "react";

// Tell me about what's going on around here?
// And how would you improve this component in case of multiple instances?
const Challenge2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrementButtonClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    setInterval(() => {
      handleIncrementButtonClick();
    }, 1000);
  }, []);

  return (
    <>
      <h1>Challenge 2</h1>
      <div className="card">
        <button onClick={handleIncrementButtonClick}>count is {count}</button>
      </div>
    </>
  );
};

export default Challenge2;
