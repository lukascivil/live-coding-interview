import { useCallback, useEffect, useState } from "react";

const commonTheme = {
  padding: "10px",
  borderRadius: "8px",
};

const lightTheme = {
  ...commonTheme,
  backgroundColor: "white",
  color: "black",
};

const darkTheme = {
  ...commonTheme,
  backgroundColor: "black",
  color: "white",
};

/**
 * Challenge 3 (React)
 *
 * (1) Build a custom hook to change the theme based on user button click action.
 * (2) Use all TypeScript system resources.
 */
const Challenge3 = () => {
  return (
    <div style={lightTheme}>
      <h1>Challenge 3</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button value="light">Light</button>
        <button value="dark">Dark </button>
      </div>
    </div>
  );
};

export default Challenge3;
