import { Bodies, Engine } from 'matter-js';

export function AddBodiesFunction(bodiesToAdd: Bodies[]): void;
export function OnSetRadius(radius: number): void;
export function OnMovePageState(): void;

export interface IComponentConfig {
    onAddBodies: AddBodiesFunction;
    onMovePageState?: OnMovePageState;
    radius: number;
    width: number;
    height: number;
    engine: Engine;
    scene?: HTMLDivElement | undefined | null;
};

export interface IStartButtonConfig {
    onAddBodies: AddBodiesFunction;
    onSetRadius: OnSetRadius;
    onMovePageState: OnMovePageState;
    width: number;
    height: number;
    engine: Engine;
    scene?: HTMLDivElement | undefined | null;
}


export interface IPillBallConfig {
    pillRef?: HTMLButtonElement | undefined | null;
    setDropBall: (dropBall: boolean) => void;
    ballConfig: IBallConfig;
}

export interface IBallConfig {
    onAddBodies: AddBodiesFunction;
    onSetRadius?: OnSetRadius;
    onBallRemove?: OnMovePageState;
    width: number;
    height: number;
    engine: Engine;
    radius?: number;
    scene?: HTMLDivElement | undefined | null;
}