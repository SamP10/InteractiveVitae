import { Bodies, Engine } from 'matter-js';

export function AddBodiesFunction(bodiesToAdd: Bodies[]): void;
export function OnSetRadius(radius: number): void;
export function OnMovePageState(): void;

export interface IIntroductionConfig {
    onAddBodies: AddBodiesFunction;
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