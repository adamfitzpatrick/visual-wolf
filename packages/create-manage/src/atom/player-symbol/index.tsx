import classNames from 'classnames';
import { PropsWithoutRef } from 'react';

import './player-symbol.css';

export interface PlayerSymbolProps {
    color?: string;
    size?: number;
    glow?: boolean;
    hoverGlow?: boolean;
}

export function PlayerSymbol(props: PropsWithoutRef<PlayerSymbolProps>) {
    const primaryColor = props.color || 'rgb(0, 225, 0)';
    const size = `${props.size || 10}rem`;
    const symbolStyle = { width: size };
    const classes = classNames('player-symbol', 'symbol', {
        'symbol--glowing': props.glow,
        'symbol--hover-glow': props.hoverGlow
    });

    return (
        <svg
            className={classes}
            style={symbolStyle}
            viewBox={`-1 -1 16 20`}
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow-player">
                <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor={primaryColor} />
              </filter>
            </defs>
            <path className='symbol__glow-path'
                style={{ fill: primaryColor, stroke: "none" }}
                d="M 6.32,2.83 c -0.33,-3.88 3.49,-3.66 5.27,0 1.33,2.75 1.97,2.71 2.49,1.29 0.90,3.03 -2.19,2.09 -3.66,-0.30 -0.74,-1.21 -2.62,-4.59 -4.10,-0.99 z"
            />
            <path className='symbol__glow-path'
                style={{ fill: "none", stroke: primaryColor, strokeWidth: 0.41, strokeLinejoin: "miter", }}
                d="M 0.28,8.06 c 0.63,-1.61 2.40,-3.71 5.32,-4.04 v -0.80 h 1.41 v 0.80 c 2.90,0.34 4.69,2.43 5.32,4.04 l -6.02,1.33 z"
            />
            <path className='symbol__glow-path'
                style={{ fill: "none", stroke: primaryColor, strokeWidth: 0.27, strokeLinejoin: "bevel", strokeMiterlimit: 3.5, }}
                d="M 12.22,9.75 l 0.22,-1.69 -6.13,1.32 -6.13,-1.32 0.22,1.69 5.91,5.82 z"
            />
            <path className='symbol__glow-path'
                style={{ fill: primaryColor, stroke: "none" }}
                d="M 0.91,9.01 l 1.22,0.26 v 1.10 l -1.22,-1.20 z"
            />
            <path className='symbol__glow-path'
                style={{ fill: primaryColor, stroke: "none" }}
                d="M 2.70,9.40 l 1.28,0.28 -0.00,2.54 -1.28,-1.26 z"
            />
            <path className='symbol__glow-path'
                style={{ fill: primaryColor, stroke: "none" }}
                d="M 4.60,9.81 l 1.37,0.29 v 4.07 l -1.37,-1.45 Z"
            />
            <path className='symbol__glow-path'
                style={{ fill: primaryColor, stroke: "none" }}
                d="M 11.76,9.01 l -1.22,0.26 v 1.10 l -1.22,1.36 Z"
            />
            <path className='symbol__glow-path'
                style={{ fill: primaryColor, stroke: "none" }}
                d="M 9.96,9.40 l -1.28,0.28 0,2.54 1.28,-1.26 z"
            />
            <path className='symbol__glow-path'
                style={{ fill: primaryColor, stroke: "none" }}
                d="M 8.06,9.81 l -1.37,0.29 v 4.07 l 1.37,-1.35 z"
            />
            <path className='symbol__glow-path'
                style={{ fill: "none", stroke: primaryColor, strokeWidth: 0.38, }}
                d="M 12.33,11.33 c 0,1.03 0,2.06 0,3.08 -1.03,0.97 -2.06,1.94 -3.09,2.91 -0.00,-0.64 -0.00,-1.28 -0.01,-1.92 1.08,-0.58 1.74,-1.69 1.82,-2.99 0.43,-0.36 0.85,-0.72 1.28,-1.09 z m -12.05,0 c 0,1.03 0,2.06 0,3.08 1.03,0.97 2.06,1.94 3.09,2.91 0.00,-0.64 0.00,-1.28 0.01,-1.92 -1.08,-0.58 -1.74,-1.69 -1.82,-2.99 -0.43,-0.36 -0.85,-0.72 -1.28,-1.09 z" />
            <path className='symbol__glow-path'
                style={{ fill: "none", stroke: primaryColor, strokeWidth: 0.36, strokeLinejoin: "bevel", strokeMiterlimit: 3.5 }}
                d="M 12.12,9.87 c 0.10,0.56 0.12,1.11 0.07,1.66 m -2.94,4.54 c -1.82,1.04 -4.07,1.04 -5.89,-0.00 m -2.94,-4.57 c -0.05,-0.54 -0.03,-1.10 0.08,-1.65"
            />
        </svg>
    )
}
