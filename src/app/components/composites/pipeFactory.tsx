import { Bodies, Composite } from 'matter-js';
import { ANGLES } from '../prefab-pipes/angleConstants';
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
        let pegY = y;

        for (let i = 0; i < width; i++) {
            Composite.add(
                composite,
                Bodies.circle(x + 10, pegY, 2.5 , {
                    isStatic: true,
                    render: {
                        fillStyle: color
                    }
                })
            );
            Composite.add(
                composite,
                Bodies.circle(x + offset, pegY, 2.5 , {
                    isStatic: true,
                    render: {
                        fillStyle: color
                    }
                })
            );
            pegY = x + i * height * 1.1;
        }
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
        let pegX = x;

        for (let i = 0; i < width; i++) {
            Composite.add(
                composite,
                Bodies.circle(pegX, y+ 10, 2.5 , {
                    isStatic: true,
                    render: {
                        fillStyle: color
                    }
                })
            );
            Composite.add(
                composite,
                Bodies.circle(pegX, y + offset, 2.5 , {
                    isStatic: true,
                    render: {
                        fillStyle: color
                    }
                })
            );
            pegX = x + i * height * 1.1;
        }
        return composite;
    }

    static sBendPipe({
        x = 0,
        y = 0,
        angles = [ANGLES[180], ANGLES[270]],
        arcAngle = ANGLES[90],
        radius = 110,
        innerRadius = 15,
        outerNumPoints = 8,
        innerNumPoints = 2,
        color = '#EAB308',
        composite = Composite.create()
    }: IBendPipeConfig): Composite {
        let secondAngleX = x;

        let secondAngleY = y;

        const anglePairs = [
            { first: ANGLES[180], second: ANGLES[360], adjustX: 0, adjustY: -(radius + innerRadius) },
            { first: ANGLES[360], second: ANGLES[180], adjustX: radius + innerRadius, adjustY: 0 },
            { first: ANGLES[90], second: ANGLES[270], adjustX: 0, adjustY: -(radius + innerRadius) },
            { first: ANGLES[270], second: ANGLES[90], adjustX: radius + innerRadius, adjustY: 0 }
        ];

        anglePairs.forEach(pair => {
            if (angles[0] === pair.first && angles[1] === pair.second) {
            secondAngleX += pair.adjustX;
            secondAngleY += pair.adjustY;
            }
        });

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
        outerNumPoints = 8,
        innerNumPoints = 2,
        color = '#EAB308',
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
        outerNumPoints = 8,
        innerNumPoints = 2,
        color = '#EAB308',
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
        color = '#EAB308',
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
