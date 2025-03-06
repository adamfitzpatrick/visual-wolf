import React, { CSSProperties, PropsWithoutRef } from 'react';

export const HEX_ASPECT_RATIO = 128 / 148;

export interface HexProps {
  size: number;
  color: string;
  customStyles: CSSProperties
}

export function Hex(props: PropsWithoutRef<HexProps>) {

  const style = {
    ...props.customStyles,
    width: `${props.size}rem`
  }
  return (
    <svg className='hex' style={style} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20.8">
      <g id='hex' transform='translate(0,0)'>
        <path id='vert-hex' d='M 0.3 5.3
        l 8.66 -5
        l 8.66 5
        v 10
        l -8.66 5
        l -8.66 -5
        v -10 z' fill='none' stroke={props.color} strokeWidth='0.5' />
      </g>
    </svg>
  )
}
