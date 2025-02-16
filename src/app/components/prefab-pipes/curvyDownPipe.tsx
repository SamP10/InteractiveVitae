import { Bodies, Composite } from 'matter-js';
import { ANGLES } from './angleConstants';
import AbstractPipe from './abstractPipe';
import PipeFactory from '../composites/pipeFactory';

class CurvyDownPipe extends AbstractPipe {
    constructor(positionX: number, positionY: number, radius: number, onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void) {
        super(positionX,
            positionY,
            radius,
            onAddBodies);
        this.createBalls(400);
    }
    createPipe(): void {
        const innerRadius = 10;
        const x = this.positionX + this.radius;
        let y = this.positionY;
        const pipeColor = this.pipeColors[0];

        PipeFactory.quarterPipe({
            x,
            y: this.positionY,
            startAngle: ANGLES[90],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });

        PipeFactory.uBendPipe({
            x,
            y: (y += this.diameter + 15 + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor

        });
        this.onAddBodies([this.composite]);
    }
}

export default CurvyDownPipe;
