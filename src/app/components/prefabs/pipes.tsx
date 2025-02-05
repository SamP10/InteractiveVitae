import { Bodies } from 'matter-js';
import { ANGLES } from './angleConstants';
import { IBendPipeConfig, ICircleArcConfig, IQuarterPipeConfig, IStraightPipeConfig } from './types/Pipes';

export function verticalPipe({
    x = 0,
    y = 0,
    offset = 0,
    width = 500,
    height = 700,
    color = '#fbbf24'
}: IStraightPipeConfig): Bodies[] {
    return [
        Bodies.rectangle(x, y, width, height, {
            isStatic: true,
            render: {
                fillStyle: color
            }
        }),
        Bodies.rectangle(x + offset, y, width, height, {
            isStatic: true,
            render: {
                fillStyle: color
            }
        })
    ];
}

export function horizontalPipe({
    x = 0,
    y = 0,
    offset = 0,
    width = 500,
    height = 700,
    color = '#fbbf24'
}: IStraightPipeConfig): Bodies[] {
    return [
        Bodies.rectangle(x, y, width, height, {
            isStatic: true,
            render: {
                fillStyle: color
            }
        }),
        Bodies.rectangle(x, y + offset, width, height, {
            isStatic: true,
            render: {
                fillStyle: color
            }
        })
    ];
}

export function sBendPipe({
    x = 0,
    y = 0,
    angles = [ANGLES[180], ANGLES[270]],
    arcAngle = ANGLES[90],
    radius = 110,
    innerRadius = 15,
    outerNumPoints = 15,
    innerNumPoints = 3,
    color = '#fbbf24'
}: IBendPipeConfig) {
    let secondAngleX = x;

    let secondAngleY = y;

    if (angles[0] === ANGLES[180] && angles[1] === ANGLES[360]) {
        secondAngleY -= radius + innerRadius;
    } else if (angles[0] === ANGLES[360] && angles[1] === ANGLES[180]) {
        secondAngleX += radius + innerRadius;
    } else if (angles[0] === ANGLES[90] && angles[1] === ANGLES[270]) {
        secondAngleY -= radius + innerRadius;
    } else if (angles[0] === ANGLES[270] && angles[1] === ANGLES[90]) {
        secondAngleX += radius + innerRadius;
    }
    return [
        ...quarterPipe({
            x,
            y,
            arcAngle,
            startAngle: angles[0],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color
        }),
        ...quarterPipe({
            x: secondAngleX,
            y: secondAngleY,
            arcAngle,
            startAngle: angles[1],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color
        })
    ];
}

export function uBendPipe({
    x = 0,
    y = 0,
    angles = [ANGLES[180], ANGLES[270]],
    arcAngle = ANGLES[90],
    radius = 110,
    innerRadius = 15,
    outerNumPoints = 15,
    innerNumPoints = 3,
    color = '#fbbf24'
}: IBendPipeConfig) {
    return [
        ...quarterPipe({
            x,
            y,
            arcAngle,
            startAngle: angles[0],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color
        }),
        ...quarterPipe({
            x,
            y,
            arcAngle,
            startAngle: angles[1],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color
        })
    ];
}

export function quarterPipe({
    x = 0,
    y = 0,
    startAngle = ANGLES[180],
    arcAngle = ANGLES[90],
    radius = 110,
    innerRadius = 15,
    outerNumPoints = 15,
    innerNumPoints = 3,
    color = '#fbbf24'
}: IQuarterPipeConfig) {
    return [
        // Outer arc
        ...circleArc({ x, y, startAngle, arcAngle, radius, numPoints: outerNumPoints, color }),
        // Inner arc
        ...circleArc({
            x,
            y,
            startAngle,
            arcAngle,
            radius: innerRadius,
            numPoints: innerNumPoints,
            color
        })
    ];
}

function circleArc({
    x = 0,
    y = 0,
    startAngle = ANGLES[180],
    arcAngle = ANGLES[90],
    radius = 110,
    numPoints = 60,
    color = '#fbbf24'
}: ICircleArcConfig): Bodies[] {
    const curveBodies = [];

    for (let i = 0; i < numPoints; i++) {
        const angle = startAngle + arcAngle * (i / (numPoints - 1));
        const localX = x + radius * Math.cos(angle);
        const localY = y + radius * Math.sin(angle);

        const peg = Bodies.circle(localX, localY, 2.5, {
            isStatic: true,
            friction: 0,
            render: { fillStyle: color }
        });
        curveBodies.push(peg);
    }

    return curveBodies;
}
