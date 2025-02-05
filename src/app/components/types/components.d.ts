import { Bodies } from 'matter-js';

export function AddBodiesFunction(bodiesToAdd: Bodies[]): void;
export function OnSetRadius(radius: number): void;

export interface IIntroductionConfig {
    onAddBodies: AddBodiesFunction;
    radius: number;
    width: number;
    height: number;
};

export interface IStartButtonConfig {
    onAddBodies: AddBodiesFunction;
    onSetRadius: OnSetRadius;
}