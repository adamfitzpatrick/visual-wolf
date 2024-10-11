import React from 'react';

interface HexPathProps {
  width: string;
  top: number;
  left: number;
}

export function HexPath({ width, top, left }: HexPathProps) {
  return (
    <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={width}
    style={{
      top,
      left
    }}
  >
    <path id='vert-hex'
      d='M 0,16
        c 2,-6 5,-6.5 10,-8.2 l -.5,-.5 l 2.6,0.2 l -2.1,1.5 l .2,-.6 c -6,2 -8,6 -8,10 z'
      fill='rgb(105, 224, 176)'
    />
  </svg>
  )
}
