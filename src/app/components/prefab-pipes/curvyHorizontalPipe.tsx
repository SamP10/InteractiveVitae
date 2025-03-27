import { Bodies, Composite } from 'matter-js';
import { ANGLES } from './angleConstants';
import AbstractPipe from './abstractPipe';
import PipeFactory from '../composites/pipeFactory';

class CurvyHorizontalPipe extends AbstractPipe {
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
        let x = this.positionX + this.radius;
        let y = this.positionY;
        const pipeColor = this.pipeColors[1];

        PipeFactory.quarterPipe({
            x,
            y,
            startAngle: ANGLES[90],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x += this.diameter + 15 + innerRadius),
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x += this.diameter + 15 + innerRadius),
            y: (y += this.diameter + 15 + innerRadius),
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
            numSegments: this.windowSize.windowX/10,
            segmentLength: 10,
            composite: this.composite,
            color: pipeColor
        });

        this.onAddBodies([this.composite]);
    }
}

export default CurvyHorizontalPipe;
