export class TypeEffect {
    private index = 0;
    private hasTyped = false;
    private setText: (text: string) => void;
    private onComplete?: () => void;

    constructor(setText: (text: string) => void, onComplete?: () => void) {
        this.setText = setText;
        this.onComplete = onComplete;
    }

    public startTyping(text: string, speed: number = 30) {
        if (this.hasTyped) return;
        this.hasTyped = true;
        this.typeEffect(text, speed);
    }

    private typeEffect(text: string, speed: number) {
        if (this.index < text.length) {
            this.setText(text.substring(0, this.index + 1));
            this.index++;
            setTimeout(() => this.typeEffect(text, speed), speed);
        } else {
            this.onComplete?.();
        }
    }
}
