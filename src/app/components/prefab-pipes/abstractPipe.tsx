'use client';
import { Bodies, Composite, Body } from 'matter-js';

export default abstract class AbstractPipe {
    protected balls: Bodies[] = [];
    protected pipe: Composite | null = null;
    protected positionX: number;
    protected positionY: number;
    protected radius: number;
    protected diameter: number;
    protected composite = Composite.create();
    protected onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void;
    protected pipeColors: string[] = ['#2E0854', '#4B0082', '#551A8B'];
    protected collisionGroup: number;
    protected collisionMask = Body.nextGroup(true);
    protected windowSize: {windowX: number, windowY: number};
    private ballColors: string[] = [
        '#0B6623',
        '#4285F4',
        '#006400',
        '#1E88E5',
        '#00ACC1',
        '#3949AB',
        '#5E35B1',
        '#039BE5'
    ];

    constructor(
        positionX: number,
        positionY: number,
        radius: number,
        onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void,
        windowSize: {windowX: number, windowY: number},
    ) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
        this.diameter = radius * 2;
        this.collisionGroup = Body.nextGroup(false);
        this.windowSize = windowSize;
        this.onAddBodies = onAddBodies;
        this.createPipe();
    }

    abstract createPipe(): void;

    public getComposite(): Composite {
        return this.composite;
    }

    public getBalls(): Bodies[] {
        return this.balls;
    }

    public getPipe(): Composite | null {
        return this.pipe;
    }

    private createBall(): void {
        const ball = Bodies.circle(this.positionX, this.positionY, this.radius, {
            restitution: 0,
            friction: 0,
            render: {
                fillStyle: this.ballColors[Math.floor(Math.random() * this.ballColors.length)]
            },
            label: 'ball',
            collisionFilter: {
                group: this.collisionGroup,
                mask: this.collisionMask
            }
        });
        this.balls.push(ball);
        this.onAddBodies([ball]);
    }

    protected createBalls(interval: number = 500): void {
        setInterval(() => this.createBall(), interval);
    }
}
