import classNames from "classnames";
import { PropsWithoutRef } from "react";

import './entity-symbol.css';

export interface EntityProps {
  color?: string;
  size?: number;
  glow?: boolean;
  hoverGlow?: boolean;
}

export function EntitySymbol(props: PropsWithoutRef<EntityProps>) {
  const stroke = props.color || 'rgb(33, 99, 255)';
  const size = `${props.size || 10}rem`;
  const symbolStyle = { width: size };
  const classes = classNames('entity-symbol', 'symbol', {
    'symbol--glowing': props.glow,
    'symbol--hover-glow': props.hoverGlow
  })

  return (
    <svg
      className={classes}
      style={symbolStyle}
      viewBox="-10 -5 150 160">
      <defs>
        <filter id="glow-entity">
          <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor={stroke} />
        </filter>
        <path
          id="skull_path"
          transform="scale(1,.8)"
          fill={stroke}
          d="M 105,42
            v 100
            c 3,0 23,14 10,25
            c -3,3 -7,0 -10,0
            c 0,0 0,16 0,22
            c 4,0 7,0 13,0
            c 3,7 5,18 6,29
            c 9,-13 11,-23 9,-27
            c 21,-5 -1,-30 12,-25
            c 16,7 32,-5 21,-24
            c -4,-7 5,-20 5,-24
            c -0,-6 -3,-7 -4,-15
            c -1,-18 -10,-61 -61,-62
            z
            m 28,80
            c 16,-12 20,0 21,5
            c 1,6 -3,16 -12,18
            c -8,2 -18,0 -21,-6
            c -3,-8 5,-12 12,-17
            z"
        />
      </defs>
      <g
        className='symbol__glow-path'
        id="g2"
        transform="translate(-45,-30)">
        <use href="#skull_path" />
        <use href="#skull_path" transform="scale(-1,1),translate(-71,0)" transform-origin="center" />
      </g>
    </svg>
  )
}
