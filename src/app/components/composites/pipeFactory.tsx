import { Bodies, Composite } from 'matter-js';
import { ANGLES } from '../prefabs/angleConstants';
import {
    IBendPipeConfig,
    ICircleArcConfig,
    IQuarterPipeConfig,
    IStraightPipeConfig
} from './types/Pipes';

export default class PipeFactory {
    static vertical({
        x,
        y,
        width,
        height,
        color,
        offset,
        composite = Composite.create()
    }: IStraightPipeConfig): Composite {
        Composite.add(
            composite,
            Bodies.rectangle(x, y, width, height, {
                isStatic: true,
                render: {
                    fillStyle: color
                }
            })
        );

        Composite.add(
            composite,
            Bodies.rectangle(x + offset, y, width, height, {
                isStatic: true,
                render: {
                    fillStyle: color
                }
            })
        );

        return composite;
    }

    static horizontal({
        x,
        y,
        offset,
        width,
        height,
        color,
        composite = Composite.create()
    }: IStraightPipeConfig): Composite {
        Composite.add(
            composite,
            Bodies.rectangle(x, y, width, height, {
                isStatic: true,
                render: {
                    fillStyle: color
                }
            })
        );
        Composite.add(
            composite,
            Bodies.rectangle(x, y + offset, width, height, {
                isStatic: true,
                render: {
                    fillStyle: color
                }
            })
        );
        return composite;
    }

    static sBendPipe({
        x = 0,
        y = 0,
        angles = [ANGLES[180], ANGLES[270]],
        arcAngle = ANGLES[90],
        radius = 110,
        innerRadius = 15,
        outerNumPoints = 15,
        innerNumPoints = 3,
        color = '#fbbf24',
        composite = Composite.create()
    }: IBendPipeConfig): Composite {
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

        PipeFactory.quarterPipe({
            x,
            y,
            arcAngle,
            startAngle: angles[0],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color,
            composite
        });

        PipeFactory.quarterPipe({
            x: secondAngleX,
            y: secondAngleY,
            arcAngle,
            startAngle: angles[1],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color,
            composite
        });

        return composite;
    }

    static uBendPipe({
        x = 0,
        y = 0,
        angles = [ANGLES[180], ANGLES[270]],
        arcAngle = ANGLES[90],
        radius = 110,
        innerRadius = 15,
        outerNumPoints = 15,
        innerNumPoints = 3,
        color = '#fbbf24',
        composite = Composite.create()
    }: IBendPipeConfig): Composite {
        PipeFactory.quarterPipe({
            x,
            y,
            arcAngle,
            startAngle: angles[0],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color,
            composite
        });
        PipeFactory.quarterPipe({
            x,
            y,
            arcAngle,
            startAngle: angles[1],
            radius,
            innerRadius,
            outerNumPoints,
            innerNumPoints,
            color,
            composite
        });
        return composite;
    }

    static quarterPipe({
        x = 0,
        y = 0,
        startAngle = ANGLES[180],
        arcAngle = ANGLES[90],
        radius = 110,
        innerRadius = 15,
        outerNumPoints = 15,
        innerNumPoints = 3,
        color = '#fbbf24',
        composite = Composite.create()
    }: IQuarterPipeConfig) {
        // Outer arc
        PipeFactory.circleArc({
            x,
            y,
            startAngle,
            arcAngle,
            radius,
            numPoints: outerNumPoints,
            color,
            composite
        });
        // Inner arc
        PipeFactory.circleArc({
            x,
            y,
            startAngle,
            arcAngle,
            radius: innerRadius,
            numPoints: innerNumPoints,
            color,
            composite
        });
        return composite;
    }

    static circleArc({
        x = 0,
        y = 0,
        startAngle = ANGLES[180],
        arcAngle = ANGLES[90],
        radius = 110,
        numPoints = 60,
        color = '#fbbf24',
        composite = Composite.create()
    }: ICircleArcConfig): Composite {
        for (let i = 0; i < numPoints; i++) {
            const angle = startAngle + arcAngle * (i / (numPoints - 1));
            const localX = x + radius * Math.cos(angle);
            const localY = y + radius * Math.sin(angle);

            const peg = Bodies.circle(localX, localY, 2.5, {
                isStatic: true,
                friction: 0,
                render: { fillStyle: color }
            });
            Composite.add(composite, peg);
        }

        return composite;
    }
}
