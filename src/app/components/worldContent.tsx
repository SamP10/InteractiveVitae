'use client';

import { useRef, useEffect, useState } from 'react';
import { Engine, Render, World, Events } from 'matter-js';
import StartButton from './startButton';

export default function WorldContent() {
  const scene = useRef(null);
  const engine = useRef(Engine.create());
  const [bodies, setBodies] = useState([]);
  const {innerHeight, innerWidth} = window;

  useEffect(() => {
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: innerWidth,
        height: innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

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

  const addBody = (body) => {
    setBodies((existingBodies) => [...existingBodies, body]);
    World.add(engine.current.world, [body]);
  }

  const cleanupOutOfBoundsBodies = () => {
    setBodies((prevBodies) =>
      prevBodies.filter((body) => {
        if (body.position.y > innerHeight) {
          World.remove(engine.current.world, body);
          return false;
        }
        return true;
      })
    );
  };

  Events.on(engine.current, 'afterUpdate', cleanupOutOfBoundsBodies);

  return (
    <div className="relative w-full h-screen">
      <div ref={scene} className="absolute inset-0 z-0" />
      <StartButton onAddBody={addBody}/>
    </div>
  );
}
