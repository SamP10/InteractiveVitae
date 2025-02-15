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
    protected pipeColors: string[] = ['#34A853', '#FBBC05', '#EA4335', '#4285F4', '#F4B400', '#0F9D58', '#DB4437', '#F4B400'];
    protected collisionGroup: number;
    protected collisionMask = Body.nextGroup(true);
    private ballColors: string[] = ['#34A853', '#FBBC05', '#EA4335', '#4285F4', '#F4B400', '#0F9D58', '#DB4437', '#F4B400'];
    
    constructor(positionX: number, positionY: number, radius: number, onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
        this.diameter = radius * 2;
        this.collisionGroup = Body.nextGroup(false);
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
