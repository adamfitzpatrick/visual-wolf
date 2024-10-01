import React from 'react';

interface StorytellerProps {
  color?: string;
  width?: string;
  strokeWidth?: string;
}

export function Storyteller(props: StorytellerProps) {
  const color = props.color || 'rgb(242, 81, 1)'
  const width = props.width || '12rem';
  const strokeWidth = props.strokeWidth || '0.5';
  return (
    <svg
      className='hex'
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="19 22 62 51"
      width={width}
      style={{
        fill: 'none',
        stroke: color,
        strokeWidth
      }}
    >
      <rect x='20' y='30' width='60' height='40' />
      <path
        d='M 25,25 v 38 c 6,-1 22,-3 25,6 c 3,-10 19,-8 
      25,-6 v -38 c -6,-1 -22,-3 -25,5 c -3,-8 -19,-6 -25,-5 z'
      />
      <line x1='50' y1='30' x2='50' y2='70' />
    </svg>
  );

  /*
      <g id='eye'>
        <path
          d='M 35,46 c 10,-8.5 20,-8.5 30,0 c -10,8.5 -20,8.5 -30,0 z'
        />
        <circle cx='50' cy='46' r='6' />
        <circle cx='50' cy='46' r='3' fill={color} stroke='none' />
        <circle cx='48.5' cy='44' r='1.5' stroke='none' />
      </g>
      */
}
