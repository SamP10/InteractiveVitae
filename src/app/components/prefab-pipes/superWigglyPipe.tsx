import { Bodies, Composite } from 'matter-js';
import { ANGLES } from './angleConstants';
import AbstractPipe from './abstractPipe';
import PipeFactory from '../composites/pipeFactory';

class SuperWigglyPipe extends AbstractPipe {
    constructor(
        positionX: number,
        positionY: number,
        radius: number,
        onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void,
        windowSize: { windowX: number; windowY: number }
    ) {
        super(positionX, positionY, radius, onAddBodies, windowSize);
        this.createBalls(450);
    }
    
    createPipe(): void {
        const innerRadius = 10;
        let x = this.positionX + this.radius;
        let y = this.positionY;
        const offset = this.diameter + 15 + innerRadius;
        const pipeColor = this.pipeColors[4];

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
            y: (y += offset),
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.uBendPipe({
            x: (x += offset),
            y: (y += offset),
            angles: [ANGLES[270], ANGLES[360]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x -= offset),
            y: (y += offset),
            angles: [ANGLES[360], ANGLES[180]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x -= offset),
            y: (y += offset),
            angles: [ANGLES[360], ANGLES[180]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x -= offset),
            y: (y += offset),
            angles: [ANGLES[360], ANGLES[180]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.uBendPipe({
            x,
            y: (y += offset),
            angles: [ANGLES[90], ANGLES[180]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.quarterPipe({
            x,
            y: (y += offset),
            startAngle: ANGLES[270],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
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
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x,
            y: (y += offset),
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x += offset),
            y: (y += offset),
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.sBendPipe({
            x: (x += offset),
            y: (y += offset),
            angles: [ANGLES[270], ANGLES[90]],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.quarterPipe({
            x: (x += offset),
            y: (y += offset),
            startAngle: ANGLES[270],
            radius: this.diameter + 15,
            innerRadius,
            composite: this.composite,
            color: pipeColor
        });
        PipeFactory.vertical({
            x,
            y,
            offset: this.diameter + 15,
            numSegments: this.windowSize.windowY/10,
            segmentLength: 11,
            composite: this.composite,
            color: pipeColor
        });

        this.onAddBodies([this.composite]);
    }
}

export default SuperWigglyPipe;
