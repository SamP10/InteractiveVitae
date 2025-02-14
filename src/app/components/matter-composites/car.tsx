import { Bodies, Constraint, Body } from 'matter-js';

export default function Car({ x, y, width, height, wheelSize, wheelBase = 20 }) {
    const group = Body.nextGroup(true),
        wheelAOffset = -width * 0.5 + wheelBase,
        wheelBOffset = width * 0.5 - wheelBase,
        wheelYOffset = 0;

    const chassis = Bodies.rectangle(x, y, width, height, {
        density: 0.0001,
        collisionFilter: {
            group: group
        },
        render: {
            fillStyle: '#fbbf24'
        }
    });

    const wheelA = Bodies.circle(x + wheelAOffset, y + wheelYOffset, wheelSize, {
        friction: 0.8,
        collisionFilter: {
            group: group
        },
        render: {
            fillStyle: '#fbbf24'
        }
    });

    const wheelB = Bodies.circle(x + wheelBOffset, y + wheelYOffset, wheelSize, {
        friction: 0.8,
        collisionFilter: {
            group: group
        },
        render: {
            fillStyle: '#fbbf24'
        }
    });

    const axelA = Constraint.create({
        bodyA: wheelA,
        bodyB: chassis,
        pointB: { x: wheelAOffset, y: wheelYOffset },
        stiffness: 1,
        length: 0
    });

    const axelB = Constraint.create({
        bodyA: wheelB,
        bodyB: chassis,
        pointB: { x: wheelBOffset, y: wheelYOffset },
        stiffness: 1,
        length: 0
    });

    return [chassis, wheelA, wheelB, axelA, axelB];
}
