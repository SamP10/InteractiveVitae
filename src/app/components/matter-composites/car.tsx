import { Bodies, Constraint, Body } from 'matter-js';

export default function Car({ x, y, width, height, wheelSize }) {
    const group = Body.nextGroup(true),
        wheelXOffset = width * 0.5,
        wheelYOffset = 0;

    const chassis = Bodies.rectangle(x, y, width, height, {
            collisionFilter: {
                group: group
            },
            density: 0.005
        });

    const wheelA = Bodies.circle(x + -wheelXOffset, y + wheelYOffset, wheelSize, {
        collisionFilter: {
            group: group
        },
        friction: 0.01
    });

    const wheelB = Bodies.circle(x + wheelXOffset, y + wheelYOffset, wheelSize, {
        collisionFilter: {
            group: group
        },
        friction: 0.01
    });

    const axelA = Constraint.create({
        bodyB: chassis,
        pointB: { x: -wheelXOffset, y: wheelYOffset },
        bodyA: wheelA,
        stiffness: 0.5,
        length: 0
    });

    const axelB = Constraint.create({
        bodyB: chassis,
        pointB: { x: wheelXOffset, y: wheelYOffset },
        bodyA: wheelB,
        stiffness: 0.5,
        length: 0
    });

    return [chassis, wheelA, wheelB, axelA, axelB];;
}
