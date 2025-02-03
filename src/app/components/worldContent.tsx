'use client';

import { useRef, useEffect, useState } from 'react';
import { Engine, Render, World } from 'matter-js';
import StartButton from './startButton';
import Introduction from './introduction';

enum PAGE_STATE {
  START = 'START',
  INTRO = 'INTRO',
  QUALIFICATIONS = 'QUALIFICATIONS',
  PROJECTS = 'PROJECTS'
}

export default function WorldContent() {
  const scene = useRef(null);
  const engine = useRef(Engine.create());
  const bodiesRef = useRef([]);
  const [currentPage, setCurrentPage] = useState(PAGE_STATE.START);
  const [radius, setRadius] = useState(0);
  let timesCalled = 0;


  const [{ innerHeight, innerWidth }, setInnerWidthHeight] = useState({
    innerWidth: 0,
    innerHeight: 0
  });

  useEffect(() => {
    setInnerWidthHeight({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
  }, []);

  useEffect(() => {
    if (!innerWidth || !innerHeight) return;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: innerWidth,
        height: innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    Render.run(render);

    const runner = () => {
      Engine.update(engine.current, 16);
      cleanupOutOfBoundBodies();
      requestAnimationFrame(runner);
    };

    runner();

    return () => {
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
    };
  }, [innerHeight, innerWidth]);

  const addBody = (body) => {
    bodiesRef.current.push(body);
    World.add(engine.current.world, [body]);
  };

  const cleanupOutOfBoundBodies = () => {
    bodiesRef.current = bodiesRef.current.filter((body) => {
      if (body.position.y > innerHeight) {
        World.remove(engine.current.world, body);
        movePageState();
        return false;
      }
      return true;
    });
  };

  const movePageState = () => {
    setCurrentPage((previousPageState) => {
      const pageStates = Object.values(PAGE_STATE);
      const currentIndex = pageStates.indexOf(previousPageState);

      if (currentIndex < pageStates.length - 1) {
        return pageStates[currentIndex + 1];
      }
      return previousPageState;
    });
  };

  return (
    <div className="relative w-full h-screen">
      <div ref={scene} className="absolute inset-0 z-0" />
      {currentPage === PAGE_STATE.START && <StartButton onAddBody={addBody} onSetRadius={setRadius} />}
      {currentPage === PAGE_STATE.INTRO && <Introduction onAddBody={addBody} radius={radius} />}
      {currentPage === PAGE_STATE.QUALIFICATIONS && <p>QU</p>}
      {currentPage === PAGE_STATE.PROJECTS && <p>Projects Content</p>}
    </div>
  );
}
