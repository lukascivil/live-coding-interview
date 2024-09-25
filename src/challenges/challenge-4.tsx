const createUserRefund = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ done: true, id });
    }, 1000);
  });
};

const createUserRefundLog = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ done: true });
    }, 1000);
  });
};

const getUserExtract = () => {
  const extract = new Array(1000).fill(0).map((_, index) => ({
    id: index,
    value: Math.random() * 100,
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(extract);
    }, 1000);
  });
};

/**
 * Challenge 4
 *
 * The user should see the extract and be able to send the refund request.
 * The user should never register the refund twice.
 * (1) List the user extract.
 * (2) Create button to send the refund and block.
 * (3) Identify opportunities for improvement (double click).
 * (4) Tell about the pagination strategy.
 * (5) Use all TypeScript system resources.
 */
const Challenge4 = () => {
  return (
    <div>
      <h1>Challenge 4</h1>
    </div>
  );
};

export default Challenge4;
