'use client';

import { useRef, useEffect } from 'react';
import { Engine, Render, World } from 'matter-js';
import StartButton from './startButton';

export default function WorldContent() {
  const scene = useRef(null);
  const engine = useRef(Engine.create());

  useEffect(() => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent',
      },
    });

    Render.run(render);
    Engine.run(engine.current);

    const runner = () => {
      Engine.update(engine.current, 16);
      requestAnimationFrame(runner);
    };

    runner();

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div ref={scene} className="absolute inset-0 z-0" />
      <StartButton engine={engine.current} /> {/* Pass the world to the button */}
    </div>
  );
}
