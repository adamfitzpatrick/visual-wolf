import React from 'react';

interface StorytellerProps {
  color?: string;
  width?: string;
  strokeWidth?: string;
  classes?: string[]
}

export function Storyteller(props: StorytellerProps) {
  const color = props.color || 'rgb(242, 81, 1)'
  const width = props.width || '12rem';
  const strokeWidth = props.strokeWidth || '0.5';
  const classes = `hex ${(props.classes || []).join(' ')}`;

  return (
    <svg
      className={classes}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 450"
      width={width}
    >
      <defs>
        <path d='M 0,0 c 5,1 12,-5 18,-0.5'
          id='text-line'
          fill='none'
          stroke='rgb(200, 200, 200)'
          strokeWidth='1'
          strokeLinecap='round'
        />
        <linearGradient id='sky-gradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='rgb(255, 118, 52)' />
          <stop offset='100%' stopColor='rgb(255, 219, 42)' />
        </linearGradient>
        <linearGradient id='water-gradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='rgb(31, 191, 255)' />
          <stop offset='100%' stopColor='rgb(0, 50, 70)' />
        </linearGradient>
        <linearGradient id='land1-gradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='rgb(141, 255, 118)' />
          <stop offset='100%' stopColor='rgb(65, 161, 47)' />
        </linearGradient>
        <linearGradient id='land2-gradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='rgb(114, 207, 91)' />
          <stop offset='100%' stopColor='rgb(53, 135, 38)' />
        </linearGradient>
        <linearGradient id='land3-gradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='rgb(122, 211, 238)' />
          <stop offset='100%' stopColor='rgb(57, 120, 140)' />
        </linearGradient>
        <linearGradient id='snow-gradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='rgba(255, 255, 255, 1)' />
          <stop offset='80%' stopColor='rgba(255, 255, 255, 0)' />
        </linearGradient>
        <linearGradient id='castle-gradient1'>
          <stop offset='0%' stopColor='rgb(200, 200, 200)' />
          <stop offset='45%' stopColor='rgb(200, 200, 200)' />
          <stop offset='55%' stopColor='rgb(150, 150, 150)' />
          <stop offset='100%' stopColor='rgb(150, 150, 150)' />
        </linearGradient>
        <linearGradient id='castle-gradient2'>
          <stop offset='0%' stopColor='rgb(200, 200, 200)' />
          <stop offset='45%' stopColor='rgb(200, 200, 200)' />
          <stop offset='55%' stopColor='rgb(100, 100, 100)' />
          <stop offset='100%' stopColor='rgb(100, 100, 102)' />
        </linearGradient>
        <linearGradient id='castle-gradient3'>
          <stop offset='0%' stopColor='rgb(141, 149, 152)' />
          <stop offset='45%' stopColor='rgb(141, 149, 152)' />
          <stop offset='55%' stopColor='rgb(57, 63, 65)' />
          <stop offset='100%' stopColor='rgb(57, 63, 65)' />
        </linearGradient>
      </defs>

      <g transform='translate(0,50)'>
        <g id='sun'>
          <circle cx='1410' cy='20' r='70' fill='rgb(255, 253, 73)' stroke='none' />
        </g>

        <g id='water'>
          <path d='M 0,350 h 1440 v 50 h -1440 v -50'
            fill='url(#water-gradient)'
            stroke='none'
          />
          <ellipse cx='700' cy='375' rx='70' ry='1' fill='rgb(255, 255, 255)' stroke='none' />
          <ellipse cx='450' cy='370' rx='100' ry='1.5' fill='rgb(255, 255, 255)' stroke='none' />
          <ellipse cx='1000' cy='365' rx='80' ry='1' fill='rgb(255, 255, 255)' stroke='none' />
          <ellipse cx='900' cy='380' rx='60' ry='1' fill='rgb(255, 255, 255)' stroke='none' />
        </g>

        <g id='land3-a' transform='translate(0,-50) scale(4,4)'>
          <path d='M 0,80 l 15,-30 c 5,-10 8,-10 13,0 l 22,44 h -50'
            fill='url(#land3-gradient)'
            stroke='none'
          />
          <path d='M 15,50 c 5,-10 8,-10 13,0 h -13'
            fill='rgb(255, 255, 255)'
            stroke='none'
          />
          <path d='M 15,49.9 l -2,4 l 6,-4 l 0,7 l 3,-7 l 3,6 l 1,-6 l 5.5,8 l -3.5,-8'
            fill='url(#snow-gradient)'
            stroke='none'
          />
        </g>

        <g id='land3-b' transform='translate(1150,-200) scale(4,4)'>
          <path d='M 42,95 l 15,-30 c 5,-10 8,-10 13,0 l 25,50 h -64'
            fill='url(#land3-gradient)'
            stroke='none'
          />
          <path d='M 57,65 c 5,-10 8,-10 13,0 h -13'
            fill='rgb(255, 255, 255)'
            stroke='none'
          />
          <path d='M 57,64.9 l -5,10 l 7,-10 l 2,6 l 2,-6 l 4,10 l 1,-10 l 5.9,8 l -3.9,-8'
            fill='url(#snow-gradient)'
            stroke='none'
          />
        </g>

        <g id='land2'>
          <path d='M 0,68 c 30,10 40,-25 75,-3 v 23 h -75'
            transform='scale(19.5,4)'
            fill='url(#land2-gradient)'
            stroke='none'
          />
        </g>

        <g id='castle' transform='translate(1200,-100) scale(4,4)'>
          <rect x='20' y='80' width='8' height='25' fill='url(#castle-gradient1)' />
          <rect x='32' y='73' width='12' height='18' fill='url(#castle-gradient1)' />
          <rect x='28' y='90' width='20' height='15' fill='url(#castle-gradient1)' />
          <rect x='48' y='85' width='8' height='20' fill='url(#castle-gradient1)' />
          <path d='M 20,81 c 3,-1 5,-1 8,0 l 1,-1 v -2 c -3,-1 -7,-1 -10,0 v 2'
            fill='url(#castle-gradient2)'
            stroke='none'
          />
          <path d='M 18.8,78.2 c 3,-1 5,-1 10.4,0 l -5,-8'
            fill='url(#castle-gradient3)'
            stroke='none'
          />
          <path d='M 28,88 c 4,-1, 16,-1 20,0 v 3 c -4,-1 -16,-1 -20,0'
            fill='url(#castle-gradient3)'
            stroke='none'
          />
          <path d='M 48,86 c 3,-1 5,-1 8,0 l 1,-1 v -2 c -3,-1 -7,-1 -10,0 v 2'
            fill='url(#castle-gradient2)'
            stroke='none'
          />
          <path d='M 46.8,83.5 c 3,-1 5,-1 10.4,0 l -5,-16'
            fill='url(#castle-gradient3)'
            stroke='none'
          />
          <path d='M 32,74.5 c 4,-1 8,-1 12,0 l 1,-1 v -2 c -5,-1 -9,-1 -14,0 v 2'
            fill='url(#castle-gradient2)'
            stroke='none'
          />
          <path d='M 30.8,71.5 c 5,-1 9,-1 14.4,0 l -7,-18'
            fill='url(#castle-gradient3)'
            stroke='none'
          />
          <path d='M 29,87.7 l 3,-0.3 v2 l -3,0.2'
            fill='rgb(40, 40, 40)'
            stroke='none'
          />
          <path d='M 47,87.7 l -3,-0.3 v2 l 3,0.2'
            fill='rgb(40, 40, 40)'
            stroke='none'
          />
          <path d='M 36.5,87.5 l 3,0 v2 l -3,0'
            fill='rgb(40, 40, 40)'
            stroke='none'
          />
          <path d='M 35,105 v -6 c 0,-3 2,-4 3,-5 c 1,1 3,2 3,5 v 6'
            fill='rgb(150,50,50)'
            stroke='none'
          />
          <rect x='23' y='82' width='2' height='3' fill='rgb(40, 40, 40)' />
          <rect x='23' y='90' width='2' height='3' fill='rgb(40, 40, 40)' />
          <rect x='51' y='89' width='2' height='3' fill='rgb(40, 40, 40)' />
          <rect x='51' y='98' width='2' height='3' fill='rgb(40, 40, 40)' />
          <rect x='37' y='76' width='2' height='3' fill='rgb(40, 40, 40)' />
          <rect x='37' y='82' width='2' height='3' fill='rgb(40, 40, 40)' />
        </g>

        <g id='land1'>
          <path d='M 0,71 h 75 v-10 c -40,8 -50,-15 -75,-3'
            transform='scale(19.5,5)'
            fill='url(#land1-gradient)'
            stroke='none'
          />
        </g>
        <g id='book' transform='translate(55,-30) scale(3,3)'>
          <path d='M 9,123 c 10,3 20.5,0 28.5,-1 c -6,-14 -16.5,-1 -25.5,-4'
            stroke='none'
            fill='rgb(255, 255, 255)'
          />
          <path d='M 11,118 l 10,-15 c 5,3 10,-3 16.5,1 c 6.5,-5 11.5,1 16.5,-1 l 9.5,13
        c -10,6 -18.5,-6 -26,6'
            stroke='none'
            fill='rgb(255, 255, 255)'
          />
          <path d='M 40,120 c 5,-5.5 15,2 25,0 l -4.5,-6 h -20'
            stroke='none'
            fill='rgb(255, 255, 255)'
          />
          <path d='M 40,122 c 1,1 20,5 25.7,1 l -2,-3 l -25,-5'
            fill='rgb(255, 255, 255)'
            stroke='none'
          />
          <ellipse cx='37.5' cy='126.5' rx='5.5' ry='2' fill='rgb(150, 150, 150)' />
          <path d='M 7,130 l 25.5,-3 c 1,-3 9,-3 10,0 l 25.5,3 l -2,-7
        c -10,2 -20.5,-10 -28.5,-1 c -9,-9 -19.5,2 -28.5,1'
            stroke='none'
            fill='rgb(200, 200, 200)'
          />
          <path d='M 11,118 c 10,3 20.5,-10 26.5,5 c 7.5,-10.5 16.5,0 27.5,-3'
            fill='none'
            stroke='rgb(200, 200, 200)'
            strokeWidth='1.2'
          />
          <path d='M 37.5,122 c 8.5,-12 16.5,0 26,-6'
            fill='none'
            stroke='rgb(200, 200, 200)'
            strokeWidth='1.2'
          />
          <path d='M 7,130 l 25.5,-3 c 1,3 9,3 10,0 l 25.5,3'
            fill='none'
            stroke='rgb(242, 81, 1)'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <g id='multi-text-lines' transform='translate(16,114)'>
            <use href='#text-line' />
            <use href='#text-line' transform='translate(2.2,-3) scale(0.9,0.9)' />
            <use href='#text-line' transform='translate(4,-6) scale(0.83,0.8)' />
          </g>
          <use href='#multi-text-lines' transform='translate(75,-0.5) scale(-1,1)' />
        </g>
      </g>
    </svg>
  );
}
