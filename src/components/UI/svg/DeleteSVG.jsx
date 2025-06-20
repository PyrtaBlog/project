export function DeleteSVG({iconColor = 'white'}) {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
                <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke={iconColor}/>
                <path
                    d="M21.6667 8.33334H8.33335C7.41288 8.33334 6.66669 9.07954 6.66669 10V10.8333C6.66669 11.7538
                    7.41288 12.5 8.33335 12.5H21.6667C22.5872 12.5 23.3334 11.7538 23.3334 10.8333V10C23.3334 9.07954
                    22.5872 8.33334 21.6667 8.33334Z"
                    stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M8.33331 12.5V20C8.33331 20.442 8.50891 20.866 8.82147 21.1785C9.13403 21.4911 9.55795 21.6667
                    9.99998 21.6667H20C20.442 21.6667 20.8659 21.4911 21.1785 21.1785C21.4911 20.866 21.6666 20.442
                    21.6666 20V12.5"
                    stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3333 15.8333H16.6666" stroke={iconColor} strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </g>
        </svg>
    );
}