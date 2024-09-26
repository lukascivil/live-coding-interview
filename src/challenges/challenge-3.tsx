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

const ThemeInfo = () => {
  return (
    <div>
      <h1>Challenge 3</h1>
      <p>Current theme: ...</p>
    </div>
  );
};

/**
 * Challenge 3 (React + Typescript)
 *
 * (1) Build a custom hook with context-api to change the theme based on user button click action.
 * (2) Show the current theme name in the ThemeInfo component without passing props.
 * (3) Use all TypeScript system resources.
 */
const Challenge3 = () => {
  return (
    <div style={lightTheme}>
      <ThemeInfo />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button value="light">☀️ Light</button>
        <button value="dark">🌑 Dark </button>
      </div>
    </div>
  );
};

export default Challenge3;
