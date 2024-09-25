// Styles
import { useState } from "react";
import "./App.css";

// Challenges
import { Challenge1, Challenge2, Challenge3, Challenge4 } from "./challenges";

// The current challenge is configured here
const App = () => {
  const [challenge, setChallenge] = useState(0);

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <button
            style={challenge === 1 ? { backgroundColor: "green" } : {}}
            onClick={() => setChallenge(1)}
          >
            Challenge 1
          </button>
        </div>
        <div>
          <button
            style={challenge === 2 ? { backgroundColor: "green" } : {}}
            onClick={() => setChallenge(2)}
          >
            Challenge 2
          </button>
        </div>
        <div>
          <button
            style={challenge === 3 ? { backgroundColor: "green" } : {}}
            onClick={() => setChallenge(3)}
          >
            Challenge 3
          </button>
        </div>
        <div>
          <button
            style={challenge === 4 ? { backgroundColor: "green" } : {}}
            onClick={() => setChallenge(4)}
          >
            Challenge 4
          </button>
        </div>
      </div>
      <div style={{ paddingTop: "8px" }}>
        {challenge === 0 && "Select your challenge"}
        {challenge === 1 && <Challenge1 />}
        {challenge === 2 && <Challenge2 />}
        {challenge === 3 && <Challenge3 />}
        {challenge === 4 && <Challenge4 />}
      </div>
    </div>
  );
};

export default App;
