import { useState, useRef } from 'react';
import { IBallConfig } from '../types/components';
import PillBall from './pillBall';

interface PillProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    ballConfig: IBallConfig;
}

export default function Pill({ label, onClick, disabled = false, ballConfig }: PillProps) {
    const [clicked, setClicked] = useState(false);
    const [dropBall, setDropBall] = useState(false);
    const pillRef = useRef<HTMLButtonElement | null>(null);

    const handleClick = () => {
        setClicked(true);
        onClick();
    };

    return (
        <div>
            {!dropBall && <button
                ref={pillRef}
                onClick={handleClick}
                className={`m-1 text-white font-bold rounded-full transform transition-all duration-300
                        ${
                            clicked
                                ? 'md:h-10 md:w-10 sm:h-10 sm:w-10'
                                : 'md:h-12 md:w-40 sm:h-100 sm:w-20'
                        } `}
                style={{
                    backgroundColor: 'rgba(66, 133, 244, 0.7)',
                    fontFamily: 'Doto',
                    fontSize: 15,
                    fontWeight: 900
                }}
                onMouseEnter={(event) => (event.currentTarget.style.backgroundColor = '#4285F4')}
                onMouseLeave={(event) =>
                    (event.currentTarget.style.backgroundColor = 'rgba(66, 133, 244, 0.7)')
                }
                disabled={disabled}>
                {!clicked && label}
            </button>}
            {clicked && <PillBall ballConfig={ballConfig} pillRef={pillRef.current}  setDropBall={setDropBall}/>}
        </div>
    );
}
