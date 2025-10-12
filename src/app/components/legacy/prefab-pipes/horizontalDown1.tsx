import { Bodies, Composite } from 'matter-js';
import { ANGLES } from './angleConstants';
import AbstractPipe from './abstractPipe';
import PipeFactory from '../composites/pipeFactory';

class HorizontalDown1 extends AbstractPipe {
    constructor(
        positionX: number,
        positionY: number,
        radius: number,
        onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void,
        windowSize: { windowX: number; windowY: number }
    ) {
        super(positionX, positionY, radius, onAddBodies, windowSize);
        this.createBalls(1700);
    }

    createPipe(): void {
        const innerRadius = 10;
        let x = this.positionX - this.radius;
        let y = this.positionY;
        const offset = this.diameter + 15 + innerRadius;
        const pipeColor = this.pipeColors[3];

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
            x: (x += this.diameter + 15 + innerRadius),
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
            numSegments: 20,
            segmentLength: 9,
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

        PipeFactory.quarterPipe({
            x: (x += offset),
            y: (y += offset),
            startAngle: ANGLES[270],
            radius: this.diameter + 17,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.vertical({
            x,
            y,
            offset: this.diameter + 15,
            numSegments: 40,
            segmentLength: 12,
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

        comp = PipeFactory.horizontal({
            x,
            y,
            offset: this.diameter + 17,
            numSegments: 25,
            segmentLength: 9,
            composite: this.composite,
            color: pipeColor,
            decline: 2.4
        });
        bodies = Composite.allBodies(comp);
        body = bodies[bodies.length - 1];
        x = body.position.x;
        y = body.position.y + 9;

        PipeFactory.uBendPipe({
            x,
            y,
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 17,
            innerRadius,
            outerNumPoints: 6,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.uBendPipe({
            x,
            y: (y += offset),
            angles: [ANGLES[90], ANGLES[180]],
            radius: this.diameter + 17,
            innerRadius,
            outerNumPoints: 6,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.quarterPipe({
            x,
            y: (y += offset),
            startAngle: ANGLES[270],
            radius: this.diameter + 17,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.vertical({
            x,
            y,
            offset: this.diameter + 15,
            numSegments: this.windowSize.windowY / 10,
            segmentLength: 11,
            composite: this.composite,
            color: pipeColor
        });

        this.onAddBodies([this.composite]);
    }
}

export default HorizontalDown1;
