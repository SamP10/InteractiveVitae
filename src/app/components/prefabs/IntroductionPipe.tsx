import PipeFactory from '../composites/pipeFactory';
import { ANGLES } from './angleConstants';
import { Composite } from 'matter-js';

export function getPipes(
    diameter: number,
    ballCollisionFilterGroup,
    crossPipeCollisionFilter
): Composite {
    const composite = Composite.create();

    pipe1(diameter, composite);
    pipe2(diameter, composite);

    return composite;
}

function pipe1(diameter: number, composite: Composite) {
    const radius = diameter + 15;
    const innerRadius = 10;
    const x = radius;
    let y = 0;

    PipeFactory.quarterPipe({ x, y, startAngle: ANGLES[90], radius, innerRadius, composite });
    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[270], ANGLES[360]],
        radius,
        innerRadius,
        composite
    });

    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[180], ANGLES[90]],
        radius,
        innerRadius,
        composite
    });

    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[270], ANGLES[360]],
        radius,
        innerRadius,
        composite
    });

    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[180], ANGLES[90]],
        radius,
        innerRadius,
        composite
    });

    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[270], ANGLES[360]],
        radius,
        innerRadius,
        composite
    });

    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[180], ANGLES[90]],
        radius,
        innerRadius,
        composite
    });

    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[270], ANGLES[360]],
        radius,
        innerRadius,
        composite
    });

    PipeFactory.uBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[180], ANGLES[90]],
        radius,
        innerRadius,
        composite
    });
}

function pipe2(diameter: number, composite: Composite) {
    const radius = diameter + 15;
    const innerRadius = 10;
    let x = 500;
    let y = 0;

    PipeFactory.quarterPipe({ x, y, startAngle: ANGLES[90], radius, innerRadius, composite });
    PipeFactory.sBendPipe({
        x,
        y: (y += radius + innerRadius),
        angles: [ANGLES[270], ANGLES[90]],
        radius,
        innerRadius,
        composite
    });
    PipeFactory.sBendPipe({
        x: (x += radius + innerRadius),
        y: (y += radius + innerRadius),
        angles: [ANGLES[270], ANGLES[90]],
        radius,
        innerRadius,
        composite
    });
    PipeFactory.sBendPipe({
        x: (x += radius + innerRadius),
        y: (y += radius + innerRadius),
        angles: [ANGLES[270], ANGLES[90]],
        radius,
        innerRadius,
        composite
    });
    PipeFactory.horizontal({
        x: (x += radius + innerRadius),
        y,
        offset: radius,
        width: 100,
        height: 10,
        color: '#EAB308',
        composite
    });
}
