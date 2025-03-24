import { Bodies, Composite } from 'matter-js';
import { ANGLES } from './angleConstants';
import AbstractPipe from './abstractPipe';
import PipeFactory from '../composites/pipeFactory';

class WigglyStraightPipe extends AbstractPipe {
    constructor(
        positionX: number,
        positionY: number,
        radius: number,
        onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void,
        windowSize: { windowX: number; windowY: number }
    ) {
        super(positionX, positionY, radius, onAddBodies, windowSize);
        this.createBalls(2500);
    }

    createPipe(): void {
        const innerRadius = 10;
        let x = this.positionX - this.radius;
        let y = this.positionY;
        const pipeColor = this.pipeColors[2];

        PipeFactory.quarterPipe({
            x,
            y: this.positionY,
            startAngle: ANGLES[360],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x -= this.diameter + 15 + innerRadius),
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[360], ANGLES[180]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x -= this.diameter + 15 + innerRadius),
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[360], ANGLES[180]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.quarterPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            startAngle: ANGLES[180],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.vertical({
            x: (x -= this.diameter + 15 + innerRadius),
            y,
            offset: this.diameter + 15,
            numSegments: 30,
            segmentLength: 10,
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
        PipeFactory.horizontalLeft({
            x,
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

export default WigglyStraightPipe;
