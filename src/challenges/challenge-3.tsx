import { useCallback, useEffect, useState } from "react";

const lightTheme = {
  backgroundColor: "white",
  color: "black",
};

const darkTheme = {
  backgroundColor: "black",
  color: "white",
};

// Build a custom hook to change the theme based on user action.
const Challenge3 = () => {
  return (
    <div style={lightTheme}>
      <h1>Challenge 2</h1>
    </div>
  );
};

export default Challenge3;
