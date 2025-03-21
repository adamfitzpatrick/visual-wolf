import { PropsWithoutRef } from 'react';
import './map-symbol.css';
import classNames from 'classnames';

export interface MapProps {
  color?: string;
  size?: number;
  glow?: boolean;
  hoverGlow?: boolean;
}

export function MapSymbol(props: PropsWithoutRef<MapProps>) {
  const
    stroke = props.color || '#000000';
  const size = `${props.size || 10}rem`;
  const symbolStyle = { width: size };
  const classes = classNames('map-symbol', 'symbol', {
    'symbol--glowing': props.glow,
    'symbol--hover-glow': props.hoverGlow
  })

  return (
    <svg className={classes} style={symbolStyle} viewBox="-10 -10 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-map">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={stroke} />
        </filter>
      </defs>
      <g transform="translate(4,0)" className='symbol__glow-path'>
        <path
          d="M 24,27 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
        <path
          d="M 44,27 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
        <path
          d="M 34,9 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
        <path
          d="M 54,9 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
        <path
          d="M 64,27 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
        <path
          d="M 64,63 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
        <path
          d="M 54,45 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
        <path
          d="M 74,45 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2px" />
      </g>
      <g transform='scale(1.1), translate(0,0)' className='symbol__glow-path'>
        <path
          d="M 7.5,8.49
            C 8.60,8.49 9.5,7.60 9.5,6.50
            C 9.5,5.39 8.60,4.50 7.5,4.50
            C 6.40,4.50 5.5,5.39 5.5,6.50
            C 5.5,7.60 6.40,8.49 7.5 8.49 z"
          fill="none"
          stroke="#ff33ff" />
        <path
          d="M 13.5,6.50
            C 13.5,11.49 8.5,14.49 7.5,14.49
            C 6.5,14.49 1.5,11.49 1.5,6.50
            C 1.5,3.19 4.19,0.5 7.5,0.5
            C 10.81,0.5 13.5,3.19 13.5 6.50 z"
          fill="none"
          stroke="#ff33ff" />
      </g>
      <g transform='scale(1.1), translate(78,77), rotate(180)' className='symbol__glow-path'>
        <path
          d="M 7.5,8.49
            C 8.60,8.49 9.5,7.60 9.5,6.50
            C 9.5,5.39 8.60,4.50 7.5,4.50
            C 6.40,4.50 5.5,5.39 5.5,6.50
            C 5.5,7.60 6.40,8.49 7.5 8.49 z"
          fill="none"
          stroke="#ff33ff" />
        <path
          d="M 13.5,6.50
            C 13.5,11.49 8.5,14.49 7.5,14.49
            C 6.5,14.49 1.5,11.49 1.5,6.50
            C 1.5,3.19 4.19,0.5 7.5,0.5
            C 10.81,0.5 13.5,3.19 13.5 6.50 z"
          fill="none"
          stroke="#ff33ff" />
      </g>
      <path className='symbol__glow-path'
        d="M 14,16 c 25 -5 52 0 40 25 c -10 10 -3 35 20 25"
        stroke={stroke}
        strokeWidth="4px"
        strokeDasharray={"4 5"}
        fill="none" />
    </svg>
  )
}
