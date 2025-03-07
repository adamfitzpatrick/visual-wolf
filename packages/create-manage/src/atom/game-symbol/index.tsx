import { PropsWithoutRef } from 'react';
import './game-symbol.css';

export interface GameSymbolProps {
  color?: string;
  size?: number;
}

export function GameSymbol(props: PropsWithoutRef<GameSymbolProps>) {
  const stroke = props.color || '#000000';
  const size = `${props.size || 10}rem`;
  const symbolStyle = { width: size };

  return (
    <svg
      className='game-symbol symbol'
      style={symbolStyle}
      viewBox="-5 0 240 250">
      <defs>
        <filter id="shadow-game">
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor={stroke}/>
        </filter>
      </defs>
      <g className='symbol__shadowed'>
        <path d="M 114,5 l 110,50 l 2,140 l -112,50 l -112,-50 l 2,-140 110,-50 z" fill="none" stroke={stroke} strokeWidth="5px" />
        <path d="M 114,5 l 0,35 l -70,130 l -42,25" fill="none" stroke={stroke} strokeWidth="5px" />
        <path d="M 114,40 l 70,130 l 42,25" fill="none" stroke={stroke} strokeWidth="5px" />
        <path d="M 114,245 l -70,-74 l -38,-115 l 108,-14 l 108,13 l -38,115 l -70,74" fill="none" stroke={stroke} strokeWidth="5px" />
        <line x1="44" x2="184" y1="170" y2="170" stroke={stroke} strokeWidth="5px" />
        <text x="83" y="145" className='game-symbol__dice-text' stroke={stroke} fill={stroke}>20</text>
      </g>
    </svg>
  )
}
