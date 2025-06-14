import { useState, useRef } from 'react';
import { IBallConfig } from '../types/components';
import PillBall from './pillBall';

interface PillProps {
    label: string;
    onClick: () => void;
    ballConfig: IBallConfig;
    disabled?: boolean;
    svgIcon?: React.ReactNode;
}

export default function Pill({ label, onClick, disabled = false, ballConfig, svgIcon }: PillProps) {
    const [clicked, setClicked] = useState(false);
    const [dropBall, setDropBall] = useState(false);
    const pillRef = useRef<HTMLButtonElement | null>(null);

    const handleClick = () => {
        setClicked(true);
        onClick();
    };

    return (
        <div>
            {!dropBall && (
                <button
                    ref={pillRef}
                    onClick={handleClick}
                    className={`m-1 text-white font-bold rounded-full transform transition-all duration-300
                        ${
                            clicked
                                ? 'md:h-10 md:w-10 sm:h-10 sm:w-10'
                                : 'md:h-12 md:w-40 sm:h-100 sm:w-20'
                        } `}
                    style={{
                        backgroundColor: 'rgba(22, 163, 74, 0.7)',
                        fontFamily: 'Doto',
                        fontSize: 15,
                        fontWeight: 900
                    }}
                    onMouseEnter={(event) => (event.currentTarget.style.backgroundColor = 'rgba(17, 155, 68, 1)')}
                    onMouseLeave={(event) =>
                        (event.currentTarget.style.backgroundColor = 'rgba(22, 163, 74, 0.7)')
                    }
                    disabled={disabled}>
                    {!clicked && <div className="flex items-center justify-center">
                        <span>{label}</span>
                        {svgIcon && <span className="inline-block">{svgIcon}</span>}
                    </div>}
                </button>
            )}
            {clicked && <PillBall ballConfig={ballConfig} pillRef={pillRef.current} setDropBall={setDropBall} />}
        </div>
    );
}
