import classNames from 'classnames';
import { PropsWithoutRef } from 'react';

import './encounter-symbol.css';

export interface EncounterSymbolProps {
    color?: string;
    size?: number;
    glow?: boolean;
    hoverGlow?: boolean;
}

export function EncounterSymbol(props: PropsWithoutRef<EncounterSymbolProps>) {
    const primaryColor = props.color || 'rgb(143, 0, 200)';
    const size = `${props.size || 10}rem`;
    const symbolStyle = { width: size };
    const classes = classNames('encounter-symbol', 'symbol', {
        'symbol--glowing': props.glow,
        'symbol--hover-glow': props.hoverGlow
    });

    return (
        <svg
            className={classes}
            style={symbolStyle}
            viewBox="0 0 75 78"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="glow-encounter">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={primaryColor} />
                </filter>
            </defs>
            <g
                transform="translate(0,5), rotate(45)"
                className="symbol__glow-path symbol__transform-element"
                style={{ transformOrigin: 'center' }}>
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={1.07}
                    strokeLinejoin='bevel'
                    strokeMiterlimit={3.5}
                    d="M 26.12,57.64 c 8.91,1.96 16.04,1.96 24.94,0"
                />
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={0.89}
                    strokeLinejoin='miter'
                    strokeMiterlimit={3.5}
                    d="M 36.81,57.11 l 0,-61.65 c 0,-2.25 0.89,-4.03 1.78,-5.57 0.89,1.54 1.78,3.32 1.78,5.57 l 0,61.65 c -0.89,0.09 -2.67,0.09 -3.56,0 z"
                />
                <path
                    fill={primaryColor}
                    stroke={primaryColor}
                    strokeWidth={1.07}
                    strokeLinejoin='miter'
                    strokeMiterlimit={3.5}
                    d="M 36.81,61.29 c 0.89,0.09 2.67,0.09 3.56,0 l -0.44,15.15 h -2.67 z"
                />
                <circle
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={0.89}
                    strokeLinejoin='miter'
                    strokeMiterlimit={3.5}
                    cx="38.59"
                    cy="78.75"
                    r="2.22" />
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={0.71}
                    strokeLinejoin='miter'
                    strokeMiterlimit={3.5}
                    d="M 38.59,54.25 v -58.79" />
            </g>
            <g
                transform="scale(0.84,0.84), translate(23,-26), rotate(-45)"
                className="symbol__glow-path symbol__transform-element"
                style={{ transformOrigin: 'center' }}>
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={1.78}
                    strokeLinejoin='bevel'
                    strokeMiterlimit={3.5}
                    d="M 12.09,19.14 c 0.62,1.25 2.49,3.92 5.35,4.63 v 13.72 c -2.85,0.71 -4.72,2.94 -5.35,4.45 -7.13,-5.70 -7.13,-17.46 0,-22.81 z"
                    id="path122" />
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={1.78}
                    strokeLinejoin='miter'
                    strokeMiterlimit={3.5}
                    d="M 10.31,13.78 c 0.45,1.82 0.95,3.65 1.78171,5.34511 -7.17,5.30 -7.05,17.20 0,22.80584 -0.85,1.68 -1.46,3.49 -1.781706,5.345122 -12.41568,-6.732864 -12.464444,-28.169135 0,-33.49607 z"
                    id="path123" />
                <path
                    fill={primaryColor}
                    stroke='none'
                    d="M 23.58,62.94 v 45.51 c 0,1.07 0,2.14 0.98,2.14 0,0.73 -2.67,2.66 -3.56,2.67 -0.89,0 -3.56,-1.94 -3.56,-2.67 0.98,0 0.98,-1.07 0.98,-2.14 v -45.51"
                    id="path132" />
                <path
                    fill={primaryColor}
                    stroke='none'
                    d="M 18.42,58.37 v -19 h 5.17 v 19"
                    id="rect88" />
                <path
                    fill={primaryColor}
                    stroke='none'
                    d="M 19.22,22.17 h 3.56 v -1.25 h -0.89 l -0.89,-6.05 l -0.89,6.05 h -0.89"
                    id="path89" />
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={1.78}
                    strokeLinejoin='bevel'
                    strokeMiterlimit={3.5}
                    d="M 29.91,19.14 c -0.63,1.25 -2.5,3.92 -5.35,4.63 v 13.72 c 2.85,0.71 4.72,2.94 5.35,4.45 7.13,-5.70 7.13,-17.46 0,-22.81 z"
                    id="path103" />
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={1.78}
                    strokeLinejoin='miter'
                    strokeMiterlimit={3.5}
                    d="M 31.690236,13.7963 c -0.356342,1.42536 -0.8908533,3.56341 -1.7817065,5.345107 7.1268235,5.345123 7.1268235,17.104383 0,22.805841 0.8908532,1.781712 1.4253645,3.385242 1.7817065,5.345122 12.471941,-6.85957 12.471941,-28.15096 0,-33.49607 z"
                    id="path107" />
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={1.43}
                    d="M 24.56,37.49 h -7.13"
                    id="path130" />
                <path
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth={1.43}
                    d="M 24.56,23.77 h -7.13"
                    id="path131" />
            </g>
        </svg>
    )
}
