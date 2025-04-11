export class TypeEffect {
    private index = 0;
    private stringIndex = 0;
    private hasTyped = false;

    constructor(private setText: (text: string[]) => void) {}

    public startTyping(text: string, speed: number = 50) {
        if (this.hasTyped) return;
        this.hasTyped = true;
        this.typeEffect(text, speed);
    }

    private typeChar(char: string) {
        this.setText((prev) => {
            const newText = [...prev];
            newText[this.stringIndex] = (newText[this.stringIndex] || '') + char;
            return newText;
        });
    }

    private typeEffect(text: string, speed: number) {
        if (this.index < text.length) {
            this.typeChar(text[this.index]);
            this.index++;
            setTimeout(() => this.typeEffect(text, speed), speed);
        } else {
            this.index = 0;
            this.stringIndex++;
        }
    }
}
