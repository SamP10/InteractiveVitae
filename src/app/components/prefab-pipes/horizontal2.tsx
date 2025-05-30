import { Bodies, Composite } from 'matter-js';
import { ANGLES } from './angleConstants';
import AbstractPipe from './abstractPipe';
import PipeFactory from '../composites/pipeFactory';

class Horizontal2 extends AbstractPipe {
    constructor(
        positionX: number,
        positionY: number,
        radius: number,
        onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void,
        windowSize: { windowX: number; windowY: number }
    ) {
        super(positionX, positionY, radius, onAddBodies, windowSize);
        this.createBalls(1000);
    }

    createPipe(): void {
        const innerRadius = 10;
        let x = this.positionX - this.radius;
        let y = this.positionY;
        const offset = this.diameter + 15 + innerRadius;
        const pipeColor = this.pipeColors[4];

        PipeFactory.vertical({
            x,
            y,
            offset: this.diameter + 15,
            numSegments: 3,
            segmentLength: 4,
            composite: this.composite,
            color: pipeColor
        });
        y = this.composite.bodies[this.composite.bodies.length - 1].position.y;

        PipeFactory.quarterPipe({
            x,
            y,
            startAngle: ANGLES[360],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        const comp = PipeFactory.horizontalLeft({
            x,
            y,
            offset: this.diameter + 17,
            numSegments: 60,
            segmentLength: 7,
            composite: this.composite,
            color: pipeColor
        });
        const bodies = Composite.allBodies(comp);
        const body = bodies[bodies.length - 1];
        x = body.position.x;
        y = body.position.y + 9;

        PipeFactory.uBendPipe({
            x,
            y,
            angles: [ANGLES[180], ANGLES[90]],
            radius: this.diameter + 17,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.uBendPipe({
            x,
            y: (y += offset),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 17,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.horizontalLeft({
            x,
            y,
            offset: this.diameter + 17,
            numSegments: this.windowSize.windowX/10,
            segmentLength: 7,
            composite: this.composite,
            color: pipeColor,
            decline: 1.7
        });

        this.onAddBodies([this.composite]);
    }
}

export default Horizontal2;
