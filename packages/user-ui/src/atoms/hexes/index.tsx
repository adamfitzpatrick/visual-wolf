import React from 'react';

interface HexProps {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  color?: string;
  zIndex?: number;
  fixed?: boolean;
}

const getHex = (
  top?: number,
  left?: number,
  bottom?: number,
  right?: number,
  color?: string,
  zIndex?: number,
  fixed?: boolean) => (
  <svg
    className='hex'
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.8 20.8"
    width='8rem'
    style={{
      position: fixed ? 'fixed' : 'absolute',
      top,
      left,
      bottom,
      right,
      zIndex
    }}
  >
    <path id='vert-hex' transform='translate(0.3,5.5)'
      d='M 0 0 l 8.66 -5 l 8.66 5 v 10 l -8.66 5 l -8.66 -5 v -10 z'
      fill='none'
      stroke={color}
      strokeWidth='0.5'
    />
  </svg>
);

export function Hexes({ top, left, bottom, right, color, zIndex, fixed }: HexProps) {
  return getHex(
    top, 
    left,
    bottom,
    right,
    color || '#333333',
    zIndex || 0,
    fixed);
}
