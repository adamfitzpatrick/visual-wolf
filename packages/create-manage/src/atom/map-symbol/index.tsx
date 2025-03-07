import { PropsWithoutRef } from 'react';
import './map-symbol.css';

export interface MapProps {
  color?: string;
  size?: number;
}

export function MapSymbol(props: PropsWithoutRef<MapProps>) {
  const stroke = props.color || '#000000';
  const size = `${props.size || 10}rem`;
  const symbolStyle = { width: size };

  return (
    <svg className="map-symbol symbol" style={symbolStyle} viewBox="-10 -10 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow-map">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={stroke} />
        </filter>
      </defs>
      <g transform="translate(4,0)" className='symbol__shadowed'>
        <path d="M24,27 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
        <path d="M44,27 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
        <path d="M34,9 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
        <path d="M54,9 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
        <path d="M64,27 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
        <path d="M64,63 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
        <path d="M54,45 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
        <path d="M74,45 l -10,-6 l -10,6 v 12 l 10,6 l 10,-6 v -12 z" fill="none" stroke={stroke} strokeWidth="2px" />
      </g>
      <g transform='scale(1.1), translate(0,0)' className='symbol__shadowed'>
        <path d="M7.5 8.49478C8.604 8.49478 9.5 7.59934 9.5 6.49606C9.5 5.39278 8.604 4.49738 7.5 4.49738C6.396 4.49738 5.5 5.39278 5.5 6.49606C5.5 7.59934 6.396 8.49478 7.5 8.49478Z" fill="none" stroke="#ff33ff" />
        <path d="M13.5 6.49606C13.5 11.4928 8.5 14.4909 7.5 14.4909C6.5 14.4909 1.5 11.4928 1.5 6.49606C1.5 3.18522 4.187 0.5 7.5 0.5C10.813 0.5 13.5 3.18522 13.5 6.49606Z" fill="none" stroke="#ff33ff" />
      </g>
      <g transform='scale(1.1), translate(78,77), rotate(180)' className='symbol__shadowed'>
        <path d="M7.5 8.49478C8.604 8.49478 9.5 7.59934 9.5 6.49606C9.5 5.39278 8.604 4.49738 7.5 4.49738C6.396 4.49738 5.5 5.39278 5.5 6.49606C5.5 7.59934 6.396 8.49478 7.5 8.49478Z" fill="none" stroke="#ff33ff" />
        <path d="M13.5 6.49606C13.5 11.4928 8.5 14.4909 7.5 14.4909C6.5 14.4909 1.5 11.4928 1.5 6.49606C1.5 3.18522 4.187 0.5 7.5 0.5C10.813 0.5 13.5 3.18522 13.5 6.49606Z" fill="none" stroke="#ff33ff" />
      </g>
      <path className='symbol__shadowed' d="M 14,16 c 25 -5 52 0 40 25 c -10 10 -3 35 20 25" stroke={stroke} strokeWidth="4px" strokeDasharray={"4 5"} fill="none"/>
    </svg>
  )
}
