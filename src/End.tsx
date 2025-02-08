import React from "react";

function End({ onRestart }) {
  return (
    <div className="ending-container">
      <h1>That's all for now! 💖</h1>
      <p>Thank you for being the best boyfriend ever.</p>
      <button onClick={onRestart}>Start Over</button>
    </div>
  );
}

export default End;