'use client';

import { useState, useRef } from 'react';
import { Bodies } from 'matter-js';

export default function StartButton({ onAddBody, onSetRadius }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [dropBall, setDropBall] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setButtonClicked(true);

    setTimeout(() => {
      const rect = buttonRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const radius = rect.width / 2;
      onSetRadius(radius);

      const circle = Bodies.circle(cx, cy, radius, {
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#fbbf24'
        }
      });

      setDropBall(true);

      onAddBody(circle);
    }, 300);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {!dropBall && (
        <button
          ref={buttonRef}
          className={`bg-yellow-500 hover:bg-yellow-300 text-white font-bold rounded-full transform transition-all duration-300 ${
            buttonClicked ? 'h-20 w-20' : 'h-12 w-40'
          } focus:outline-none z-10`}
          onClick={handleClick}>
          <span
            className={`transition-opacity duration-300 ${
              buttonClicked ? 'opacity-0' : 'opacity-100'
            }`}>
            Get to know me
          </span>
        </button>
      )}
    </div>
  );
}
