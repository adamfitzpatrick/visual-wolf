import { ProfileOutlined } from '@ant-design/icons';

import './app.css';
import { Hexes } from '../atoms/hexes';
import { Storyteller } from '../atoms/storyteller-icon';
import { Fragment } from 'react/jsx-runtime';
import { HexPath } from '../atoms/hex-path';

function firstTimeHeader() {
  return (
    <Fragment>
      <div className='role-toggle'>
        <div className='role-storyteller'>storyteller</div>
      </div>
      <div className='nav'>
        <div className='nav-link active'>create</div>
        <div className='nav-link'>manage</div>
        <div className='nav-link'>play</div>
        <div><span className="account-button material-symbols-outlined">manage_accounts</span></div>
      </div>
    </Fragment>
  );
}

const savedSnippet1 = <div className='step-stats'>
  <div><span className='material-symbols-outlined'>group</span> 4</div>
  <div><span className='material-symbols-outlined'>map</span> 0</div>
</div>

function firstTimeMain() {
  return (
    <div className='game-object'>
      <div className='stage'>
        <div className='highlight'>
          <Hexes left={115} top={-95} color='rgb(241, 81, 1)' width='8rem' />
        </div>
        <div className='icon-name'>
          <svg
            className='book-icon'
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 65 35"
            width='10rem'
          >

            <defs>
              <path d='M 0,0 c 5,1 12,-5 18,-0.5'
                id='text-line'
                fill='none'
                stroke='rgb(200, 200, 200)'
                strokeWidth='1'
                strokeLinecap='round'
              />
            </defs>
            <g id='book' transform='translate(-5,-100)'>
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
          </svg>
          <h2 className='game-title'>Hall of the Mountain Queen</h2>
        </div>
      </div>
      <div className='stage arrow-1'>
        <HexPath width='20rem' top={30} left={40} />
      </div>
      <div className='stage players'>
        <div className='highlight'>
          <Hexes left={90} top={0} color='rgb(105, 224, 176)' width='8rem' />
        </div>
        <div className='icon-name'>
          <div>
            <span className='material-symbols-outlined make-big'>groups</span>
          </div>
          <div>3/7 Players Accepted</div>
        </div>
      </div>
    </div>
  );
}

function getHexHex(row: number, col: number) {
  // Rows run upward to the right
  const x0 = col * 310 + row * 62;
  const y0 = col * 109 + row * 3 * 109;
  return <div>
    <Hexes left={x0} bottom={y0} />
    <Hexes left={x0 + 124} bottom={y0} />
    <Hexes left={x0 - 62} bottom={y0 + 109} />
    <Hexes left={x0 + 62} bottom={y0 + 109} />
    <Hexes left={x0 + 186} bottom={y0 + 109} />
    <Hexes left={x0} bottom={y0 + 218} />
    <Hexes left={x0 + 124} bottom={y0 + 218} />
  </div>
}

function getHexRow(row: number) {
  return [-1, 0, 1, 2].map(col => getHexHex(row, col));
}

export default function App() {
  return (
    <div className='app'>
      <div className='header'>
        <div className='app-name'>
          GridWolf
        </div>
        {firstTimeHeader()}
      </div>
      <div className='main'>
        <div>
          <Hexes top={-20} left={-40} zIndex={-1} fixed />
          <Hexes top={-20} left={84} zIndex={-1} fixed />
          <Hexes top={88} left={22} zIndex={-1} fixed />
          <Hexes top={195} left={-40} zIndex={-1} fixed />
          <Hexes top={303} left={22} zIndex={-1} fixed />
          <Hexes top={-20} left={208} zIndex={-1} fixed />
        </div>
        <div className='bg-grid'>
          {getHexRow(0)}
          {getHexRow(1)}
          {getHexRow(2)}
          {getHexRow(3)}
        </div>
        <div className='haze-block' />
        {firstTimeMain()}
      </div>
    </div>
  );
}
