import React from "react";

const Bubbles = () => {
  const createBubbles = () => {
    return [...Array(20)].map((_, index) => {
      const randomStart = Math.random() * 100; // Random starting position (0-100%)
      const randomDelay = -(Math.random() * 20); // Random negative delay (0-20s)

      const style = {
        animationDelay: `${randomDelay}s`,
        top: `${randomStart}%`,
      };

      return <div key={index} className="bubble" style={style} />;
    });
  };

  return <div className="bubbles">{createBubbles()}</div>;
};

export default Bubbles;
