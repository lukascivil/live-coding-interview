import { useCallback, useEffect, useState } from "react";

const createUserRefund = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ done: true });
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

/**
 * Challenge 4
 *
 * The user need to send a very important request to the server.
 * (1) Identify opportunities for improvement
 */
const Challenge4 = () => {
  const userClickTwice = useCallback(() => {
    createUserRefund();
    createUserRefundLog();
  }, []);

  return (
    <div>
      <h1>Challenge 4</h1>
      <button onClick={userClickTwice}>Send user refund</button>
    </div>
  );
};

export default Challenge4;
