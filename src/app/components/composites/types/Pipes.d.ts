import { ANGLES } from '../../prefab-pipes/angleConstants';

export interface IPipeDefaultConfig {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    composite?: Composite;
}

export interface IStraightPipeConfig extends IPipeDefaultConfig {
    offset: number;
}

export interface IBendPipeConfig extends Partial<IPipeDefaultConfig> {
    angles?: ANGLES[];
    arcAngle?: ANGLES;
    radius?: number;
    innerRadius?: number;
    outerNumPoints?: number;
    innerNumPoints?: number;
}

export interface IQuarterPipeConfig extends Partial<IBendPipeConfig> {
    startAngle?: ANGLES;
}

export interface ICircleArcConfig extends Partial<IQuarterPipeConfig> {
    numPoints?: number;
}
