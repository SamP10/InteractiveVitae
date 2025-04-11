export default function ResponseMessageTemplate({ text }: { text: string[] }) {
    return (
        <div
            className="p-5 rounded-lg text-left float-left clear-both"
            style={{
                fontFamily: 'Doto',
                fontSize: 25,
                color: 'white',
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                fontWeight: 900,
                display: 'inline-block'
            }}>
            <p>
                <strong>Sam: </strong>
                {text}
            </p>
        </div>
    );
}
