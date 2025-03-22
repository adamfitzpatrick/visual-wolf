import { Button } from 'antd';
import { Logo } from '../../atom/logo'
import { HexField } from '@visual-wolf/components';

import './welcome.css'

const AUTH_ENDPOINT      = process.env.REACT_APP_AUTH_ENDPOINT;
const AUTH_CLIENT_ID     = process.env.REACT_APP_AUTH_CLIENT_ID;
const AUTH_RESPONSE_TYPE = 'token';
const AUTH_SCOPE         = 'openid';
const AUTH_REDIRECT_URI  = process.env.REACT_APP_AUTH_REDIRECT;
const LOGIN_URL = `${AUTH_ENDPOINT}?client_id=${AUTH_CLIENT_ID}&response_type=${AUTH_RESPONSE_TYPE}&scope=${AUTH_SCOPE}&redirect_uri=${AUTH_REDIRECT_URI}`;

export function Welcome() {
  const goLogin = () => {
    window.location.href = LOGIN_URL;
  }
  return (
    <div className='welcome'>
      <div className='welcome-text'>
        <h1>Visualize your gameplay with <Logo inline flat white /></h1>
        <p className='description'>
          Featuring intuitive work flows and smooth play sessions, GridWolf lets you run
          combat or other complex settings with ease:
        </p>
        <ul className='features'>
          <li className='feature'>Works with any TTRPG</li>
          <li className='feature'>Easy initiative tracking</li>
          <li className='feature'>Show combatant status and conditions</li>
          <li className='feature'>Apply movement penalties</li>
        </ul>
        <div className='sign-in'>
          <Button color='cyan' variant='solid' size='large' onClick={goLogin}>Sign-In or Sign-up</Button></div>
      </div>
      <div className='hexes'>
        <HexField size={8} color='#444444' rowDefs={[[0, 2], [0, 3], [2, 2], [0, 3], [0, 4]]} />
      </div>
    </div>
  )
}
