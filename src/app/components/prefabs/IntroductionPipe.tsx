import { sBendPipe, uBendPipe, quarterPipe } from './pipes';
import { ANGLES } from './angleConstants';

export function getPipes(diameter: number) {
    const pipeCurves = [];
    const radius = diameter + 15;
    const innerRadius = 10;
    let x = radius;
    let y = 0;
    pipeCurves.push(...quarterPipe({ x, y, startAngle: ANGLES[90], radius, innerRadius }));
    pipeCurves.push(
        ...uBendPipe({
            x,
            y: (y += radius + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius,
            innerRadius
        })
    );
    pipeCurves.push(
        ...uBendPipe({
            x,
            y: (y += radius + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius,
            innerRadius
        })
    );
    pipeCurves.push(
        ...uBendPipe({
            x,
            y: (y += radius + innerRadius),
            angles: [ANGLES[270], ANGLES[360]],
            radius,
            innerRadius
        })
    );
    pipeCurves.push(
        ...uBendPipe({
            x,
            y: (y += radius + innerRadius),
            angles: [ANGLES[180], ANGLES[90]],
            radius,
            innerRadius
        })
    );
    pipeCurves.push(
        ...sBendPipe({
            x,
            y: (y += radius + innerRadius),
            angles: [ANGLES[270], ANGLES[90]],
            radius,
            innerRadius
        })
    );
    pipeCurves.push(
        ...sBendPipe({
            x: (x += radius + innerRadius),
            y: (y += radius + innerRadius),
            angles: [ANGLES[270], ANGLES[90]],
            radius,
            innerRadius
        })
    );

    return pipeCurves;
}
