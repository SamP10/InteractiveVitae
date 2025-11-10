export default function NavigationItem({ index, showNav }: { index: number, showNav: boolean }) {
    return (
        <div>
                <button
                    key={index}
                    className={`aspect-square w-full bg-darkPine rounded-md flex transition-opacity transition-all duration-700 ${
                        showNav ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        transitionDelay: index % 2 === 0 ? '300ms' : '200ms'
                    }}>
                    <span
                        className={`items-center align-center m-auto text-cream text-xs transition-opacity duration-300 ${
                            showNav ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            transitionDelay: showNav ? `700ms` : '0ms'
                        }}>
                        {`Item ${index + 1}`}
                    </span>
                </button>
        </div>
    );
}
