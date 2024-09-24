import { useEffect, useState } from "react";

// Tell me about what's going on around here?
const Challenge1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrementButtonClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    handleIncrementButtonClick();
  }, [count]);

  return (
    <>
      <h1>Challenge 1</h1>
      <div className="card">
        <button onClick={handleIncrementButtonClick}>count is {count}</button>
      </div>
    </>
  );
};

export default Challenge1;
