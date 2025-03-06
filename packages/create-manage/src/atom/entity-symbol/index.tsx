import { PropsWithoutRef } from "react";

export interface EntityProps {
  color?: string;
  size?: number;
}

export function EntitySymbol(props: PropsWithoutRef<EntityProps>) {
  const stroke = props.color || '#000000';
  const size = `${props.size || 10}rem`;
  const symbolStyle = { width: size };

  return (
    <svg className="map-symbol symbol" style={symbolStyle} viewBox="0 0 210 210">
      <defs>
        <filter id="shadow-entity">
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor={stroke} />
        </filter>
      </defs>
      <g className='symbol__shadowed' transform="translate(0,-60),scale(1.1, 1.1)">
        <path
          fill={stroke}
          d="M 105,61
         V 160
         c 2,0 23,13 10,25
          -3,2 -6,0 -10,0
          0,0 0,16 0,21
          4,0 6,0 12,0
          2,7 4,18 5,29
          8,-12 10,-23 9,-27
          21,-4 -1,-30 11,-24
          15,6 31,-4 21,-24
          -3,-7 4,-19 4,-23
          0,-5 -3,-7 -3,-14
          -1,-17 -10,-61 -61,-62
         z
         m 28,79
         c 16,-11 20,0 20,5 0,6 -3,16 -12,18 -8,1 -18,0 -20,-6 -2,-7 5,-12.06235 12,-17
         z" />
        <path
          fill={stroke}
          transform-origin="center"
          transform="scale(-1,1)"
          d="M 105,61
         V 160
         c 2,0 23,13 10,25
          -3,2 -6,0 -10,0
          0,0 0,16 0,21
          4,0 6,0 12,0
          2,7 4,18 5,29
          8,-12 10,-23 9,-27
          21,-4 -1,-30 11,-24
          15,6 31,-4 21,-24
          -3,-7 4,-19 4,-23
          0,-5 -3,-7 -3,-14
          -1,-17 -10,-61 -61,-62
         z
         m 28,79
         c 16,-11 20,0 20,5 0,6 -3,16 -12,18 -8,1 -18,0 -20,-6 -2,-7 5,-12.06235 12,-17
         z" />
      </g>
    </svg>
  )
}
