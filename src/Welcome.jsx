import React from "react";

function Welcome({ onStart }) {
  return (
    <div className="welcome-container">
      <h1>Hi Alfie! 💖</h1>
      <button onClick={onStart}>Click Me!</button>
    </div>
  );
}

export default Welcome;