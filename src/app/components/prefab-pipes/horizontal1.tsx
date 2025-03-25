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
        super(positionX+20, positionY, radius, onAddBodies, windowSize);
        this.createBalls(1500);
    }

    createPipe(): void {
        const innerRadius = 10;
        let x = this.positionX-20;
        let y = this.positionY;
        const pipeColor = this.pipeColors[2];

        PipeFactory.vertical({
            x,
            y,
            offset: this.diameter + 15,
            numSegments: 50,
            segmentLength: 7,
            composite: this.composite,
            color: pipeColor
        });
        y = this.composite.bodies[this.composite.bodies.length - 1].position.y;

        PipeFactory.quarterPipe({
            x: (x += this.diameter + 15 + innerRadius),
            y,
            startAngle: ANGLES[90],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        let comp = PipeFactory.horizontal({
            x,
            y,
            offset: this.diameter + 15,
            numSegments: 50,
            segmentLength: 10,
            composite: this.composite,
            color: pipeColor
        });

        let bodies = Composite.allBodies(comp);
        let body = bodies[bodies.length - 1];
        x = body.position.x;
        y = body.position.y + 11;
        PipeFactory.sBendPipe({
            x,
            y,
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        comp = PipeFactory.horizontal({
            x: (x += this.diameter + 15 + innerRadius),
            y,
            offset: this.diameter + 15,
            numSegments: 50,
            segmentLength: 10,
            composite: this.composite,
            color: pipeColor
        });
        bodies = Composite.allBodies(comp);
        body = bodies[bodies.length - 1];
        x = body.position.x;
        y = body.position.y + 11;
        PipeFactory.sBendPipe({
            x,
            y,
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.horizontal({
            x: (x += this.diameter + 15 + innerRadius),
            y,
            offset: this.diameter + 15,
            numSegments: this.windowSize.windowX,
            segmentLength: 10,
            composite: this.composite,
            color: pipeColor
        });
        this.onAddBodies([this.composite]);
    }
}

export default Horizontal1;
