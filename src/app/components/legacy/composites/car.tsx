import { Bodies, Body, Composite, Constraint } from 'matter-js';
import { ICarConfig } from './types/Car';

export default class Car {
    carComposite: Composite;
    constructor({
        startX,
        startY,
        bodyWidth,
        bodyHeight,
        wheelRadius,
        wheelBase = 20
    }: ICarConfig) {
        const group = Body.nextGroup(true),
            wheelAOffset = -bodyWidth * 0.5 + wheelBase,
            wheelBOffset = bodyWidth * 0.5 - wheelBase,
            wheelYOffset = 0;

        const chassis = Bodies.rectangle(startX, startY, bodyWidth, bodyHeight, {
            density: 0.0001,
            collisionFilter: {
                group: group
            },
            render: {
                fillStyle: '#EAB308'
            }
        });

        const wheelA = Bodies.circle(startX + wheelAOffset, startY + wheelYOffset, wheelRadius, {
            friction: 0.8,
            collisionFilter: {
                group: group
            },
            render: {
                fillStyle: '#EAB308'
            }
        });

        const wheelB = Bodies.circle(startX + wheelBOffset, startY + wheelYOffset, wheelRadius, {
            friction: 0.8,
            collisionFilter: {
                group: group
            },
            render: {
                fillStyle: '#EAB308'
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

        this.carComposite = Composite.create();
        Composite.add(this.carComposite, [chassis, wheelA, wheelB, axelA, axelB]);
    }

    getCar(): Composite {
        return this.carComposite;
    }
}
