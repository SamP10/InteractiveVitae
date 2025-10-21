'use client';
import CallingCard from '../callingCard/callingCard';

export default function Landing() {
    const squares = Array.from({ length: 6 });

    return (
        <div>
            <CallingCard></CallingCard>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
                {squares.map((_, i) => (
                    <button
                        key={i}
                        className="w-full aspect-square bg-darkPine rounded-md flex animate-slide-in-bottom opacity-70 hover:opacity-100 pointer-events-none"
                        onAnimationEnd={(e) => { e.currentTarget.style.pointerEvents = 'auto'; }}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
}
