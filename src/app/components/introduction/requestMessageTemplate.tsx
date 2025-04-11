export default function RequestMessageTemplate({ text }: { text: string }) {
    return (
        <div
            className="p-5 rounded-lg text-right float-right clear-both"
            style={{
                fontFamily: 'Doto',
                fontSize: 25,
                color: 'white',
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                fontWeight: 900,
                display: 'inline-block'
            }}>
            <p>
                <strong>You: </strong>
                {text}
            </p>
        </div>
    );
}
