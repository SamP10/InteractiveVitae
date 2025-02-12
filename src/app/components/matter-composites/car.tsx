import { Bodies, Constraint, Body } from 'matter-js';

const Car = ({ x, y, width, height, wheelSize }) => {
    const group = Body.nextGroup(true);

    const body = Bodies.rectangle(x, y, width, height, {
        collisionFilter: { group }
    });

    const wheelA = Bodies.circle(x - width / 2, y + height / 2, wheelSize, {
        collisionFilter: { group },
        friction: 0.8,
        restitution: 0
    });

    const wheelB = Bodies.circle(x + width / 2, y + height / 2, wheelSize, {
        collisionFilter: { group },
        friction: 0.8,
        restitution: 0
    });

    const axelA = Constraint.create({
        bodyB: body,
        pointB: { x: -width / 4, y: height / 2 },
        bodyA: wheelA,
        stiffness: 0.5,
        length: 0
    });

    const axelB = Constraint.create({
        bodyB: body,
        pointB: { x: width / 4, y: height / 2 },
        bodyA: wheelB,
        stiffness: 0.5,
        length: 0
    });

    return [body, wheelA, wheelB, axelA, axelB];
};

export default Car;
