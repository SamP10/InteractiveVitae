'use client';

import { useState, useRef, useEffect } from 'react';
import { Engine, Render, Bodies, World } from 'matter-js';

export default function StartPage() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const scene = useRef(null);
  const engine = useRef(Engine.create());
  const buttonRef = useRef(null);

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    });

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }), // Top boundary
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }), // Left boundary
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }), // Bottom boundary
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }) // Right boundary
    ]);

    Render.run(render);

    const runner = () => {
      Engine.update(engine.current, 16);
      requestAnimationFrame(runner);
    };

    runner();

    return () => {
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
    };
  }, []);

  const handleClick = () => {
    setButtonClicked(true);

    setTimeout(() => {
      const rect = buttonRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const radius = rect.width / 2;

      const circle = Bodies.circle(cx, cy, radius, {
        restitution: 0.9,
        friction: 0.005,
        render: {
          fillStyle: '#fbbf24'
        }
      });
      
      setShowCircle(true);
      World.add(engine.current.world, [circle]);
    }, 300);
  };

  return (
    <div className="relative w-full h-screen">
      <div ref={scene} className="absolute inset-0 z-0 justify-center" />
      <div className="flex items-center justify-center w-full h-screen">
        {!showCircle && (
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
    </div>
  );
}
