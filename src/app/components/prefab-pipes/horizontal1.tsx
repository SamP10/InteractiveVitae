import { Bodies, Composite } from 'matter-js';
import { ANGLES } from './angleConstants';
import AbstractPipe from './abstractPipe';
import PipeFactory from '../composites/pipeFactory';

class Horizontal1 extends AbstractPipe {
    constructor(
        positionX: number,
        positionY: number,
        radius: number,
        onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void,
        windowSize: { windowX: number; windowY: number }
    ) {
        super(positionX, positionY, radius, onAddBodies, windowSize);
        this.createBalls(1500);
    }

    createPipe(): void {
        const innerRadius = 10;
        let x = this.positionX - this.radius;
        let y = this.positionY;
        const offset = this.diameter + 15 + innerRadius;
        const pipeColor = this.pipeColors[2];

        PipeFactory.vertical({
            x,
            y,
            offset: this.diameter + 15,
            numSegments: 20,
            segmentLength: 7,
            composite: this.composite,
            color: pipeColor
        });
        y = this.composite.bodies[this.composite.bodies.length - 1].position.y;

        PipeFactory.quarterPipe({
            x: (x += offset),
            y,
            startAngle: ANGLES[90],
            radius: this.diameter + 17,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        let comp = PipeFactory.horizontal({
            x,
            y,
            offset: this.diameter + 17,
            numSegments: 50,
            segmentLength: 13,
            composite: this.composite,
            color: pipeColor,
            decline: 1.7
        });

        let bodies = Composite.allBodies(comp);
        let body = bodies[bodies.length - 1];
        x = body.position.x;
        y = body.position.y + 9;
        PipeFactory.sBendPipe({
            x,
            y,
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 17,
            innerRadius,
            composite: this.composite,
            outerNumPoints: 6,
            color: pipeColor
        });

        comp = PipeFactory.horizontal({
            x: (x += offset),
            y,
            offset: this.diameter + 17,
            numSegments: 25,
            segmentLength: 13,
            composite: this.composite,
            color: pipeColor,
            decline: 1.7
        });
        bodies = Composite.allBodies(comp);
        body = bodies[bodies.length - 1];
        x = body.position.x;
        y = body.position.y + 9;
        PipeFactory.sBendPipe({
            x,
            y,
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 17,
            innerRadius,
            composite: this.composite,
            outerNumPoints: 6,
            color: pipeColor
        });

        PipeFactory.horizontal({
            x: (x += offset),
            y,
            offset: this.diameter + 17,
            numSegments: this.windowSize.windowX/10,
            segmentLength: 15,
            composite: this.composite,
            color: pipeColor,
            decline: 1.7
        });

        this.onAddBodies([this.composite]);
    }
}

export default Horizontal1;
