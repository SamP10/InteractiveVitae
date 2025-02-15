'use client';
import { Bodies, Composite } from 'matter-js';

export default abstract class AbstractPipe {
    protected balls: Bodies[] = [];
    protected pipe: Composite | null = null;
    protected positionX: number;
    protected positionY: number;
    protected radius: number;
    protected diameter: number;
    protected composite = Composite.create();
    protected onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void;
    protected pipeColors: string[] = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#D4A5A5', '#A5D4A5', '#A5A5D4'];
    private ballColors: string[] = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#D4A5A5', '#A5D4A5', '#A5A5D4'];;


    constructor(positionX: number, positionY: number, radius: number, onAddBodies: (bodiesToAdd: Bodies[] | Composite[]) => void) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
        this.diameter = radius * 2;
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
            label: 'ball'
        });
        this.balls.push(ball);
        this.onAddBodies([ball]);
    }


    protected createBalls(interval: number = 500): void {
        setInterval(() => this.createBall(), interval);
    }
}
