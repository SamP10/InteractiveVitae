import { Engine } from 'matter-js';

export function AddBodiesFunction(bodiesToAdd: Array<Body | Composite>): void;
export function OnMovePageState(): void;

export interface IComponentConfig {
    onAddBodies: AddBodiesFunction;
    width: number;
    height: number;
    engine: Engine;
    radius: number;
    onMovePageState?: OnMovePageState;
    onSetRadius?: React.Dispatch<React.SetStateAction<number>>;
    scene?: HTMLDivElement | undefined | null;
}

export interface IPillBallConfig {
    pillRef?: HTMLButtonElement | undefined | null;
    setDropBall: (dropBall: boolean) => void;
    ballConfig: IBallConfig;
}

export interface IBallConfig extends IComponentConfig {
    onBallRemove?: OnMovePageState;
}

export interface IPillProps {
    label: string;
    onClick: () => void;
    ballConfig: IBallConfig;
    disabled?: boolean;
    svgIcon?: React.ReactNode;
}

export interface IPillContainerProps {
    addChatComponent(component: React.ReactNode): void;
    ballConfig: IBallConfig;
}
