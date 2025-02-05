import { ANGLES } from '../angleConstants';

export interface IStraightPipeConfig {
    x?: number;
    y?: number;
    offset?: number;
    width?: number;
    height?: number;
    color?: string;
}

export interface IBendPipeConfig {
    x?: number;
    y?: number;
    angles?: ANGLES[];
    arcAngle?: ANGLES;
    radius?: number;
    innerRadius?: number;
    outerNumPoints?: number;
    innerNumPoints?: number;
    color?: string;
}

export interface ICircleArcConfig {
    x?: number;
    y?: number;
    startAngle?: ANGLES;
    arcAngle?: ANGLES;
    radius?: number;
    innerRadius?: number;
    outerNumPoints?: number;
    innerNumPoints?: number;
    color?: string;
}
