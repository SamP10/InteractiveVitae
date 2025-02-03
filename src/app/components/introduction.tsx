'use client';

import { Bodies } from 'matter-js';
import { useEffect, useRef } from 'react';

export default function Introduction({ onAddBody, radius }) {
  const ballAdded = useRef(false);

  useEffect(() => {
    if (!ballAdded.current) {
      const circle = Bodies.circle(50, -50, radius, {
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#fbbf24'
        }
      });

      onAddBody(circle);
      ballAdded.current = true;
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
    </div>
  );
}
