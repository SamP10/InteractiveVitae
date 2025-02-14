import PipeFactory from '../composites/pipeFactory';
import { ANGLES } from './angleConstants';
import { Composite } from 'matter-js';

export function getPipes(diameter: number): Composite {
    const radius = diameter + 15;
    const innerRadius = 10;
    let x = radius;
    let y = 0;
    const composite = Composite.create();

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

    return composite;
}
