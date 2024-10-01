import { ProfileOutlined } from '@ant-design/icons';

import './app.css';
import { Hexes } from '../atoms/hexes';
import { Storyteller } from '../atoms/storyteller-icon';
import { Player } from '../atoms/player';
import { Fragment } from 'react/jsx-runtime';

function firstTimeHeader() {
  return (
    <div className='nav'>
      <div><span className="account-button material-symbols-outlined">manage_accounts</span></div>
    </div>
  );
}

function firstTimeMain() {
  return (
    <Fragment>
      <div className='role-selector'>
        <div className='instructions'>Choose your role</div>
        <div className='storyteller'>
          <Storyteller />
          <div>Storyteller</div>
        </div>
        <div className='player'>
          <Player />
          <div>Player</div>
        </div>
      </div>
    </Fragment>
  );
}
function storytellerLandingHeader() {
  return (
    <div className='nav'>
      <div><span className="account-button material-symbols-outlined">manage_accounts</span></div>
    </div>
  );
}

function storytellerLandingMain() {
  return (
    <div>
    </div>
  );
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
        <div>
          <Hexes bottom={-20} right={-40} />
          <Hexes bottom={-20} right={84} />
          <Hexes bottom={-20} right={208} />
          <Hexes bottom={88} right={22} />
          <Hexes bottom={195} right={-40} />
          <Hexes bottom={303} right={22} />
        </div>
        {firstTimeMain()}
      </div>
    </div>
  );
}
